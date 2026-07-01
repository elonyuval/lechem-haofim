// Builds the human-readable Hebrew summary + WhatsApp/mailto deep-links for
// an Order. This is how the business actually receives phase-1 "orders"
// (requests), since there's no payment backend yet.

import type { Order } from "../data/types";
import { businessInfo } from "../data/businessInfo";

export function formatOrderAsText(order: Order): string {
  const lines: string[] = [];
  lines.push(`הזמנה חדשה מאתר ${businessInfo.businessNameHe}`);
  lines.push("");
  lines.push(`שם: ${order.customer.fullName}`);
  lines.push(`טלפון: ${order.customer.phone}`);
  if (order.customer.email) lines.push(`אימייל: ${order.customer.email}`);
  if (order.eventDate) lines.push(`תאריך אירוע: ${order.eventDate}`);
  lines.push("");
  lines.push("פריטים:");
  for (const item of order.items) {
    const priceText =
      item.unitPrice != null ? ` (₪${item.unitPrice} ליחידה)` : "";
    lines.push(`- ${item.nameHe} x${item.quantity}${priceText}`);
  }
  if (order.notes) {
    lines.push("");
    lines.push(`הערות: ${order.notes}`);
  }
  return lines.join("\n");
}

export function buildWhatsAppLink(order: Order): string {
  const text = formatOrderAsText(order);
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoLink(order: Order): string {
  const text = formatOrderAsText(order);
  const subject = `הזמנה חדשה מ${order.customer.fullName}`;
  return `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
