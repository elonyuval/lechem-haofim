import { Minus, Plus, Trash2 } from "lucide-react";
import { useSelectedProducts, useSelectionContext } from "../../context/SelectionContext";

export function SelectionList() {
  const selected = useSelectedProducts();
  const { setQuantity, removeProduct } = useSelectionContext();

  if (selected.length === 0) {
    return <p className="text-crust-500">לא נבחרו פריטים עדיין.</p>;
  }

  return (
    <ul className="divide-y divide-crust-100 rounded-2xl border border-crust-100 bg-white">
      {selected.map(({ product, quantity }) => (
        <li key={product.id} className="flex items-center justify-between gap-3 p-4">
          <div>
            <p className="font-semibold text-crust-800">{product.nameHe}</p>
            <p className="text-sm text-crust-500">
              {product.price != null ? `₪${product.price} ליחידה` : "מחיר לפי בקשה"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(product.id, quantity - 1)}
              className="rounded-full bg-crust-50 p-1.5 text-crust-700 hover:bg-crust-100"
              aria-label="הפחת כמות"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-6 text-center font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(product.id, quantity + 1)}
              className="rounded-full bg-crust-50 p-1.5 text-crust-700 hover:bg-crust-100"
              aria-label="הוסף כמות"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              onClick={() => removeProduct(product.id)}
              className="rounded-full p-1.5 text-red-500 hover:bg-red-50"
              aria-label="הסר פריט"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
