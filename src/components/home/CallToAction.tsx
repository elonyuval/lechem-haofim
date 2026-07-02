import { motion } from "framer-motion";
import { LinkButton } from "../ui/LinkButton";
import { ROUTES } from "../../lib/constants";

export function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-4xl px-4 pb-20 text-center"
    >
      <div className="rounded-3xl bg-crust-500 px-8 py-12 text-white shadow-xl shadow-crust-500/30">
        <h2 className="mb-3 font-display text-2xl md:text-3xl">מתכננים אירוע?</h2>
        <p className="mb-6 text-crust-50">
          בחרו מהתפריט המלא או מהחבילות המוכנות שלנו, ונחזור אליכם בהקדם.
        </p>
        <LinkButton to={ROUTES.contact} variant="secondary">
          צרו קשר עכשיו
        </LinkButton>
      </div>
    </motion.section>
  );
}
