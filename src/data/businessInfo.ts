// Single source of truth for contact/kashrut/social content.
// Used by Header, Footer, ContactPage, and order WhatsApp/email messages.
// Sourced from the current lechemhaofim.com site — update here if it changes.

import type { BusinessInfo } from "./types";

export const businessInfo: BusinessInfo = {
  businessNameHe: "לחם האופים",
  businessNameEn: "Lechem HaOfim",
  address: {
    street: "רחוב חינוך 4",
    city: "נתניה",
  },
  phones: {
    orders: "051-575-3706",
    store: "09-884-0888",
  },
  whatsappNumber: "972515753706",
  email: "lhoffice2018@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/lehem_haofim",
    facebook: "https://www.facebook.com/lechemhaofimNEYANYA",
  },
  kashrut: {
    statementHe: "כשר למהדרין",
  },
};
