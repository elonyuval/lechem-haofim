export const ROUTES = {
  home: "/",
  menu: "/menu",
  menuCategory: (slug: string) => `/menu/${slug}`,
  orderReview: "/order/review",
  hostingPackages: "/hosting-packages",
  about: "/about",
  contact: "/contact",
} as const;

export const SELECTION_STORAGE_KEY = "lechem-selection-draft";
export const ORDERS_STORAGE_KEY = "lechem-orders";
