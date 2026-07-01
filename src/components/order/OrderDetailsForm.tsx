import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderDetailsFormSchema, type OrderDetailsFormValues } from "../../lib/validation";
import { Button } from "../ui/Button";

export function OrderDetailsForm({
  onSubmit,
}: {
  onSubmit: (values: OrderDetailsFormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderDetailsFormValues>({
    resolver: zodResolver(orderDetailsFormSchema),
    defaultValues: { fullName: "", phone: "", email: "", eventDate: "", notes: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-semibold text-crust-700">שם מלא *</label>
        <input
          {...register("fullName")}
          className="w-full rounded-xl border border-crust-200 px-4 py-2 focus:border-crust-500 focus:outline-none"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-crust-700">טלפון *</label>
        <input
          {...register("phone")}
          dir="ltr"
          className="w-full rounded-xl border border-crust-200 px-4 py-2 text-right focus:border-crust-500 focus:outline-none"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-crust-700">אימייל (אופציונלי)</label>
        <input
          {...register("email")}
          dir="ltr"
          className="w-full rounded-xl border border-crust-200 px-4 py-2 text-right focus:border-crust-500 focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-crust-700">תאריך האירוע (אופציונלי)</label>
        <input
          type="date"
          {...register("eventDate")}
          className="w-full rounded-xl border border-crust-200 px-4 py-2 focus:border-crust-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-crust-700">הערות</label>
        <textarea
          {...register("notes")}
          rows={3}
          className="w-full rounded-xl border border-crust-200 px-4 py-2 focus:border-crust-500 focus:outline-none"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        המשך לשליחת ההזמנה
      </Button>
    </form>
  );
}
