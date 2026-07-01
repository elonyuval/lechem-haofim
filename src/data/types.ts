// The canonical shape of every important entity in the app.
// Menus, business info, and orders are intentionally kept as separate top-level
// concerns — see categories.ts / products.ts / businessInfo.ts / lib/orderStorage.ts.
// If you're looking for "everything important about the site", start here.

export type ProductCategorySlug =
  | "salads" // סלטים
  | "sandwiches" // כריכונים
  | "vegetables" // ירקות
  | "pastas" // פסטות
  | "baked-goods" // מאפים ולחמים
  | "desserts"; // מתוקים

export interface Category {
  id: string;
  slug: ProductCategorySlug;
  nameHe: string;
  nameEn?: string;
  description?: string;
  isPlaceholderImage: boolean;
  sortOrder: number;
}

export interface Product {
  id: string;
  categorySlug: ProductCategorySlug;
  nameHe: string;
  nameEn?: string;
  description?: string;
  /** null = "price on request" */
  price: number | null;
  isPlaceholderPrice: boolean;
  isPlaceholderImage: boolean;
  isPlaceholderText: boolean;
  tags?: string[];
  available: boolean;
}

export interface HostingPackage {
  id: string;
  nameHe: string;
  description: string;
  includedCategories: ProductCategorySlug[];
  minGuests?: number;
  priceFrom?: number | null;
  isPlaceholder: boolean;
}

export interface BusinessInfo {
  businessNameHe: string;
  businessNameEn?: string;
  address: {
    street: string;
    city: string;
  };
  phones: {
    orders: string;
    store: string;
  };
  /** E.164 format for wa.me links, e.g. "972515753706" */
  whatsappNumber: string;
  email: string;
  socials: {
    instagram?: string;
    facebook?: string;
  };
  kashrut: {
    statementHe: string;
    certifyingBody?: string;
  };
  hours?: { dayHe: string; hoursText: string }[];
}

// --- Order domain: phase 1 = request collection, NOT payment ---

export interface OrderItem {
  productId: string;
  /** snapshot at time of order, in case product data changes later */
  nameHe: string;
  quantity: number;
  unitPrice: number | null;
  notes?: string;
}

export type OrderStatus = "new" | "contacted" | "confirmed" | "cancelled";

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
  };
  eventDate?: string;
  items: OrderItem[];
  notes?: string;
  channel: "whatsapp" | "email" | "local-only";
}
