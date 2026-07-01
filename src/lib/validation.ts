// zod schemas mirroring data/types.ts. Used by forms (react-hook-form resolver)
// and as a runtime guard when reading/writing orders in localStorage.

import { z } from "zod";

// Accepts Israeli mobile/landline formats: 05X-XXXXXXX, 0X-XXXXXXX, with or
// without dashes/spaces.
const israeliPhoneRegex = /^0(5\d|[2-489])[-\s]?\d{3}[-\s]?\d{4}$/;

export const orderItemSchema = z.object({
  productId: z.string().min(1),
  nameHe: z.string().min(1),
  quantity: z.number().int().positive(),
  unitPrice: z.number().nullable(),
  notes: z.string().optional(),
});

export const orderDetailsFormSchema = z.object({
  fullName: z.string().trim().min(2, "יש להזין שם מלא"),
  phone: z
    .string()
    .trim()
    .regex(israeliPhoneRegex, "מספר טלפון לא תקין"),
  email: z.string().trim().email("כתובת אימייל לא תקינה").optional().or(z.literal("")),
  eventDate: z.string().optional().or(z.literal("")),
  notes: z.string().optional(),
});

export type OrderDetailsFormValues = z.infer<typeof orderDetailsFormSchema>;

export const orderSchema = z.object({
  id: z.string().min(1),
  createdAt: z.string().min(1),
  status: z.enum(["new", "contacted", "confirmed", "cancelled"]),
  customer: z.object({
    fullName: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().optional(),
  }),
  eventDate: z.string().optional(),
  items: z.array(orderItemSchema),
  notes: z.string().optional(),
  channel: z.enum(["whatsapp", "email", "local-only"]),
});

export const ordersListSchema = z.array(orderSchema);
