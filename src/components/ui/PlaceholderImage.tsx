// Renders a nice gradient placeholder card with an icon + visible "sample"
// badge when isPlaceholder is true. Once real photography is added (real
// imageUrl + isPlaceholder: false upstream), swap this out for a real <img>.

import { UtensilsCrossed } from "lucide-react";
import { Badge } from "./Badge";
import clsx from "clsx";

export function PlaceholderImage({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-crust-200 via-crust-100 to-crust-300",
        className,
      )}
    >
      <UtensilsCrossed className="h-10 w-10 text-crust-500/60" aria-hidden />
      <span className="sr-only">{label}</span>
      <div className="absolute bottom-2 right-2">
        <Badge tone="placeholder">תוכן לדוגמה</Badge>
      </div>
    </div>
  );
}
