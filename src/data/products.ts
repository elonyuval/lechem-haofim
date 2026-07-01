// PLACEHOLDER CONTENT — every item here is sample data (obviously-fake names,
// round placeholder prices) so nobody mistakes it for the real menu.
// To replace an item with a real one: edit nameHe/description/price/imageUrl,
// then flip the matching isPlaceholder* flag(s) to false.
// See data/README.md for the full editing guide.

import type { Product } from "./types";

function placeholderProduct(
  id: string,
  categorySlug: Product["categorySlug"],
  index: number,
): Product {
  return {
    id,
    categorySlug,
    nameHe: `מוצר לדוגמה ${index}`,
    nameEn: `Sample Product ${index}`,
    description: "תיאור לדוגמה — יוחלף בתיאור האמיתי של המוצר.",
    price: 42,
    isPlaceholderPrice: true,
    isPlaceholderImage: true,
    isPlaceholderText: true,
    tags: [],
    available: true,
  };
}

const categoriesWithCounts: [Product["categorySlug"], number][] = [
  ["salads", 4],
  ["sandwiches", 4],
  ["vegetables", 3],
  ["pastas", 3],
  ["baked-goods", 4],
  ["desserts", 4],
];

export const products: Product[] = categoriesWithCounts.flatMap(
  ([categorySlug, count]) =>
    Array.from({ length: count }, (_, i) =>
      placeholderProduct(`${categorySlug}-${i + 1}`, categorySlug, i + 1),
    ),
);

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
