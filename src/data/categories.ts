// The 6 product categories shown on the Menu page.
// Edit nameHe/description freely — these are already real (taken from the
// current site's navigation), only product-level content below is placeholder.

import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "cat-salads",
    slug: "salads",
    nameHe: "סלטים",
    nameEn: "Salads",
    description: "שפע של סוגי סלטים טריים לכל אירוח",
    isPlaceholderImage: true,
    sortOrder: 1,
  },
  {
    id: "cat-sandwiches",
    slug: "sandwiches",
    nameHe: "כריכונים",
    nameEn: "Sandwiches",
    description: "מגוון כריכונים ומגשי טאפאס לאירועים",
    isPlaceholderImage: true,
    sortOrder: 2,
  },
  {
    id: "cat-vegetables",
    slug: "vegetables",
    nameHe: "ירקות",
    nameEn: "Vegetables",
    description: "ירקות עונתיים טריים בבחירה מוקפדת",
    isPlaceholderImage: true,
    sortOrder: 3,
  },
  {
    id: "cat-pastas",
    slug: "pastas",
    nameHe: "פסטות",
    nameEn: "Pastas",
    description: "פסטות ביתיות ברטבים משלנו",
    isPlaceholderImage: true,
    sortOrder: 4,
  },
  {
    id: "cat-baked-goods",
    slug: "baked-goods",
    nameHe: "מאפים ולחמים",
    nameEn: "Baked Goods & Breads",
    description: "מאפים בעבודת יד ולחמים איכותיים",
    isPlaceholderImage: true,
    sortOrder: 5,
  },
  {
    id: "cat-desserts",
    slug: "desserts",
    nameHe: "מתוקים",
    nameEn: "Desserts",
    description: "מבחר קינוחים מתוק ומפנק להשלמת האירוע",
    isPlaceholderImage: true,
    sortOrder: 6,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
