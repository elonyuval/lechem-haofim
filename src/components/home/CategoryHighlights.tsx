import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { ROUTES } from "../../lib/constants";

export function CategoryHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-extrabold text-crust-900">
        הקטגוריות שלנו
      </h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {categories.map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              to={ROUTES.menuCategory(category.slug)}
              className="group block overflow-hidden rounded-2xl border border-crust-100 shadow-sm transition-shadow hover:shadow-xl"
            >
              <PlaceholderImage
                label={category.nameHe}
                className="h-32 w-full transition-transform duration-300 group-hover:scale-105 md:h-40"
              />
              <div className="p-4">
                <h3 className="font-bold text-crust-800">{category.nameHe}</h3>
                {category.description && (
                  <p className="mt-1 text-sm text-crust-600">{category.description}</p>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
