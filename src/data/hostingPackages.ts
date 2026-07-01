// PLACEHOLDER CONTENT — package tiers for the "חבילות אירוח" (Hosting Packages)
// page. Replace with real package names/prices/inclusions when available,
// then set isPlaceholder to false.

import type { HostingPackage } from "./types";

export const hostingPackages: HostingPackage[] = [
  {
    id: "package-basic",
    nameHe: "חבילת אירוח בסיסית לדוגמה",
    description: "מבחר סלטים וכריכונים המתאים לאירועים קטנים.",
    includedCategories: ["salads", "sandwiches"],
    minGuests: 10,
    priceFrom: 490,
    isPlaceholder: true,
  },
  {
    id: "package-standard",
    nameHe: "חבילת אירוח סטנדרטית לדוגמה",
    description: "סלטים, כריכונים, ירקות ומאפים טריים.",
    includedCategories: ["salads", "sandwiches", "vegetables", "baked-goods"],
    minGuests: 20,
    priceFrom: 890,
    isPlaceholder: true,
  },
  {
    id: "package-premium",
    nameHe: "חבילת אירוח פרימיום לדוגמה",
    description: "מגוון מלא הכולל את כל הקטגוריות, כולל פסטות ומתוקים.",
    includedCategories: [
      "salads",
      "sandwiches",
      "vegetables",
      "pastas",
      "baked-goods",
      "desserts",
    ],
    minGuests: 30,
    priceFrom: 1490,
    isPlaceholder: true,
  },
];
