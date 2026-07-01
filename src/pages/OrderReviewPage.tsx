import { useState } from "react";
import { Link } from "react-router-dom";
import { SelectionList } from "../components/order/SelectionList";
import { OrderDetailsForm } from "../components/order/OrderDetailsForm";
import { OrderReviewSummary } from "../components/order/OrderReviewSummary";
import { OrderSubmitActions } from "../components/order/OrderSubmitActions";
import { useSelectedProducts, useSelectionContext } from "../context/SelectionContext";
import { useOrders } from "../hooks/useOrders";
import type { Order } from "../data/types";
import type { OrderDetailsFormValues } from "../lib/validation";
import { ROUTES } from "../lib/constants";

export function OrderReviewPage() {
  const selected = useSelectedProducts();
  const { clear } = useSelectionContext();
  const { addOrder } = useOrders();
  const [submittedOrder, setSubmittedOrder] = useState<Order | null>(null);

  function handleDetailsSubmit(values: OrderDetailsFormValues) {
    const order: Order = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "new",
      customer: {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email || undefined,
      },
      eventDate: values.eventDate || undefined,
      items: selected.map(({ product, quantity }) => ({
        productId: product.id,
        nameHe: product.nameHe,
        quantity,
        unitPrice: product.price,
      })),
      notes: values.notes || undefined,
      channel: "local-only",
    };

    addOrder(order);
    setSubmittedOrder(order);
    clear();
  }

  if (submittedOrder) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-extrabold text-crust-900">כמעט סיימנו!</h1>
        <p className="mb-6 text-crust-600">
          הבקשה שלכם נשמרה. לחצו על אחת מהאפשרויות למטה כדי לשלוח אותה בפועל אלינו.
        </p>
        <div className="mb-6">
          <OrderReviewSummary order={submittedOrder} />
        </div>
        <OrderSubmitActions order={submittedOrder} />
      </section>
    );
  }

  if (selected.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="mb-3 text-2xl font-extrabold text-crust-900">אין פריטים לבחירה</h1>
        <p className="mb-6 text-crust-600">גשו לתפריט ובחרו מוצרים כדי להמשיך להזמנה.</p>
        <Link to={ROUTES.menu} className="font-semibold text-crust-600 underline">
          לתפריט
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-extrabold text-crust-900">סקירת ההזמנה</h1>
      <div className="mb-8">
        <SelectionList />
      </div>
      <OrderDetailsForm onSubmit={handleDetailsSubmit} />
    </section>
  );
}
