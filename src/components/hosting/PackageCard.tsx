import { motion } from "framer-motion";
import type { HostingPackage } from "../../data/types";
import { categories } from "../../data/categories";
import { Badge } from "../ui/Badge";
import { LinkButton } from "../ui/LinkButton";
import { ROUTES } from "../../lib/constants";

export function PackageCard({ pkg }: { pkg: HostingPackage }) {
  const includedNames = pkg.includedCategories
    .map((slug) => categories.find((c) => c.slug === slug)?.nameHe)
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-3 rounded-2xl border border-crust-100 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-crust-800">{pkg.nameHe}</h3>
        {pkg.isPlaceholder && <Badge tone="placeholder">לדוגמה</Badge>}
      </div>
      <p className="text-sm text-crust-600">{pkg.description}</p>
      <p className="text-sm text-crust-500">כולל: {includedNames.join(", ")}</p>
      {pkg.minGuests && (
        <p className="text-sm text-crust-500">מינימום {pkg.minGuests} סועדים</p>
      )}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xl font-extrabold text-crust-700">
          {pkg.priceFrom != null ? `החל מ-₪${pkg.priceFrom}` : "מחיר לפי בקשה"}
        </span>
        <LinkButton to={ROUTES.contact} className="px-4 py-2 text-sm">
          לפרטים
        </LinkButton>
      </div>
    </motion.div>
  );
}
