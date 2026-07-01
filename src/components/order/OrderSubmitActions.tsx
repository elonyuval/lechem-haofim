import { MessageCircle, Mail } from "lucide-react";
import type { Order } from "../../data/types";
import { buildMailtoLink, buildWhatsAppLink } from "../../lib/orderFormat";

export function OrderSubmitActions({ order }: { order: Order }) {
  return (
    <div className="space-y-3">
      <a
        href={buildWhatsAppLink(order)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600"
      >
        <MessageCircle className="h-5 w-5" />
        שליחה דרך וואטסאפ
      </a>
      <a
        href={buildMailtoLink(order)}
        className="flex items-center justify-center gap-2 rounded-full border border-crust-300 bg-white px-6 py-3 font-semibold text-crust-700 hover:bg-crust-50"
      >
        <Mail className="h-5 w-5" />
        שליחה דרך מייל
      </a>
      <p className="text-center text-sm text-crust-500">
        ההזמנה נשמרה במכשיר שלך. זהו שלב איסוף בקשות — התשלום הסופי יסוכם ישירות מול הצוות שלנו.
      </p>
    </div>
  );
}
