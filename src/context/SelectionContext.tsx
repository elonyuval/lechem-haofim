// The "cart"-equivalent: an in-progress selection of products the customer
// is building up before submitting an order request (no payment involved).

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { getProductById } from "../data/products";
import type { Product } from "../data/types";
import { SELECTION_STORAGE_KEY } from "../lib/constants";

export interface SelectionEntry {
  productId: string;
  quantity: number;
}

type SelectionState = SelectionEntry[];

type SelectionAction =
  | { type: "add"; productId: string }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" };

function selectionReducer(
  state: SelectionState,
  action: SelectionAction,
): SelectionState {
  switch (action.type) {
    case "add": {
      const existing = state.find((e) => e.productId === action.productId);
      if (existing) {
        return state.map((e) =>
          e.productId === action.productId
            ? { ...e, quantity: e.quantity + 1 }
            : e,
        );
      }
      return [...state, { productId: action.productId, quantity: 1 }];
    }
    case "remove":
      return state.filter((e) => e.productId !== action.productId);
    case "setQuantity":
      if (action.quantity <= 0) {
        return state.filter((e) => e.productId !== action.productId);
      }
      return state.map((e) =>
        e.productId === action.productId
          ? { ...e, quantity: action.quantity }
          : e,
      );
    case "clear":
      return [];
    default:
      return state;
  }
}

function loadInitialState(): SelectionState {
  try {
    const raw = localStorage.getItem(SELECTION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e) =>
        typeof e?.productId === "string" && typeof e?.quantity === "number",
    );
  } catch {
    return [];
  }
}

interface SelectionContextValue {
  entries: SelectionEntry[];
  totalItemCount: number;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [entries, dispatch] = useReducer(selectionReducer, [], loadInitialState);

  useEffect(() => {
    localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const value = useMemo<SelectionContextValue>(
    () => ({
      entries,
      totalItemCount: entries.reduce((sum, e) => sum + e.quantity, 0),
      addProduct: (productId) => dispatch({ type: "add", productId }),
      removeProduct: (productId) => dispatch({ type: "remove", productId }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: "setQuantity", productId, quantity }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [entries],
  );

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelectionContext(): SelectionContextValue {
  const ctx = useContext(SelectionContext);
  if (!ctx) {
    throw new Error("useSelectionContext must be used within SelectionProvider");
  }
  return ctx;
}

export interface SelectedProductEntry {
  product: Product;
  quantity: number;
}

export function useSelectedProducts(): SelectedProductEntry[] {
  const { entries } = useSelectionContext();
  return entries
    .map((entry) => {
      const product = getProductById(entry.productId);
      return product ? { product, quantity: entry.quantity } : null;
    })
    .filter((v): v is SelectedProductEntry => v !== null);
}
