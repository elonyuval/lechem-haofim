import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "../../data/types";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { useTilt } from "../../hooks/useTilt";
import { useSelection } from "../../hooks/useSelection";

export function ProductCard({ product }: { product: Product }) {
  const tilt = useTilt(6);
  const { addProduct } = useSelection();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3 }}
      className="perspective-container"
    >
      <motion.div
        style={tilt.enabled ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : undefined}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="tilt-card flex h-full flex-col overflow-hidden rounded-2xl border border-crust-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
      >
        <PlaceholderImage label={product.nameHe} className="h-36 w-full" />
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-crust-800">{product.nameHe}</h3>
            {product.isPlaceholderText && <Badge tone="placeholder">לדוגמה</Badge>}
          </div>
          {product.description && (
            <p className="flex-1 text-sm text-crust-600">{product.description}</p>
          )}
          <div className="mt-2 flex items-center justify-between">
            <span className="font-semibold text-crust-700">
              {product.price != null ? `₪${product.price}` : "מחיר לפי בקשה"}
            </span>
            <Button
              variant="secondary"
              className="px-3 py-2 text-sm"
              onClick={() => addProduct(product.id)}
              aria-label={`הוסף ${product.nameHe} לבחירה`}
            >
              <Plus className="h-4 w-4" />
              הוסף
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
