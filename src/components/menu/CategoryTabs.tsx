import { categories } from "../../data/categories";
import { Tabs } from "../ui/Tabs";

export function CategoryTabs({
  value,
  onChange,
}: {
  value: string;
  onChange: (slug: string) => void;
}) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      items={categories.map((c) => ({ value: c.slug, label: c.nameHe }))}
    />
  );
}
