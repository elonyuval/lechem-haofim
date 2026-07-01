import clsx from "clsx";

export interface TabItem {
  value: string;
  label: string;
}

export function Tabs({
  items,
  value,
  onChange,
}: {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      role="tablist"
      className="flex flex-wrap gap-2 border-b border-crust-200 pb-3"
    >
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              isActive
                ? "bg-crust-500 text-white shadow-md shadow-crust-500/30"
                : "bg-crust-50 text-crust-700 hover:bg-crust-100",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
