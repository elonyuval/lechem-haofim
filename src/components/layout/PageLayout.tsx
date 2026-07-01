import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-crust-900">
      <Header />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
