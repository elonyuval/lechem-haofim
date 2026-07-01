import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { Menu as MenuIcon, X } from "lucide-react";
import { ROUTES } from "../../lib/constants";
import { businessInfo } from "../../data/businessInfo";
import { SelectionSummaryBar } from "../order/SelectionSummaryBar";

const navItems = [
  { to: ROUTES.home, label: "בית", end: true },
  { to: ROUTES.menu, label: "הזמנות אונליין" },
  { to: ROUTES.hostingPackages, label: "חבילות אירוח" },
  { to: ROUTES.about, label: "אודות וכשרות" },
  { to: ROUTES.contact, label: "צור קשר" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-crust-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to={ROUTES.home} className="text-xl font-extrabold text-crust-700">
          {businessInfo.businessNameHe}
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-crust-500 text-white"
                    : "text-crust-700 hover:bg-crust-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-full p-2 text-crust-700 hover:bg-crust-100 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-crust-100 px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "rounded-lg px-4 py-3 text-sm font-semibold",
                  isActive ? "bg-crust-500 text-white" : "text-crust-700 hover:bg-crust-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}

      <SelectionSummaryBar />
    </header>
  );
}
