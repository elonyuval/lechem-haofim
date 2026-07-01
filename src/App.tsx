import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SelectionProvider } from "./context/SelectionContext";
import { PageLayout } from "./components/layout/PageLayout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { HostingPackagesPage } from "./pages/HostingPackagesPage";
import { AboutKashrutPage } from "./pages/AboutKashrutPage";
import { ContactPage } from "./pages/ContactPage";
import { OrderReviewPage } from "./pages/OrderReviewPage";

export function App() {
  return (
    <BrowserRouter>
      <SelectionProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:categorySlug" element={<MenuPage />} />
            <Route path="/order/review" element={<OrderReviewPage />} />
            <Route path="/hosting-packages" element={<HostingPackagesPage />} />
            <Route path="/about" element={<AboutKashrutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </SelectionProvider>
    </BrowserRouter>
  );
}
