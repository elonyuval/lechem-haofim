import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useSelection } from "../../hooks/useSelection";
import { ROUTES } from "../../lib/constants";

export function SelectionSummaryBar() {
  const { totalItemCount } = useSelection();

  return (
    <AnimatePresence>
      {totalItemCount > 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-crust-100 bg-crust-500"
        >
          <Link
            to={ROUTES.orderReview}
            className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm font-semibold text-white"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              {totalItemCount} פריטים נבחרו
            </span>
            <span className="underline">להשלמת ההזמנה ←</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
