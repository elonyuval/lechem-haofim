// Durable, inspectable record of submitted orders — the "list of everything
// important" for orders specifically (menus/business-info live in src/data/).
//
// PLACEHOLDER INTEGRATION POINT:
// Phase 1 has no backend/payment. When a real backend exists, replace the
// body of saveOrder() with an API call (e.g. POST /api/orders) — the Order
// shape in data/types.ts is designed to be sent as-is to a future API.

import type { Order } from "../data/types";
import { ordersListSchema } from "./validation";
import { ORDERS_STORAGE_KEY } from "./constants";

export function listOrders(): Order[] {
  const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = ordersListSchema.parse(JSON.parse(raw));
    return parsed as Order[];
  } catch {
    // Corrupt or outdated shape — do not crash the app over stored data.
    return [];
  }
}

export function saveOrder(order: Order): void {
  const existing = listOrders();
  const updated = [...existing, order];
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
}
