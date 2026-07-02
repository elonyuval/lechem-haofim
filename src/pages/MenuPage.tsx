import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import { CategoryTabs } from "../components/menu/CategoryTabs";
import { ProductGrid } from "../components/menu/ProductGrid";
import { ROUTES } from "../lib/constants";

export function MenuPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const activeSlug = categorySlug ?? categories[0].slug;
  const products = getProductsByCategory(activeSlug);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 font-display text-3xl text-crust-900">הזמנות אונליין</h1>
      <p className="mb-6 text-crust-600">בחרו קטגוריה, הוסיפו מוצרים לבחירה, ונשלח את הבקשה בסוף.</p>
      <div className="mb-8">
        <CategoryTabs value={activeSlug} onChange={(slug) => navigate(ROUTES.menuCategory(slug))} />
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
