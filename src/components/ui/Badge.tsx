import clsx from "clsx";
import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "placeholder" | "kosher";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "neutral" && "bg-crust-100 text-crust-700",
        tone === "placeholder" && "bg-amber-100 text-amber-800 border border-amber-300",
        tone === "kosher" && "bg-emerald-100 text-emerald-800",
      )}
    >
      {children}
    </span>
  );
}
