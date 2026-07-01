import type { Order } from "../../data/types";
import { formatOrderAsText } from "../../lib/orderFormat";

export function OrderReviewSummary({ order }: { order: Order }) {
  return (
    <pre className="whitespace-pre-wrap rounded-2xl border border-crust-100 bg-crust-50 p-4 text-sm text-crust-800">
      {formatOrderAsText(order)}
    </pre>
  );
}
