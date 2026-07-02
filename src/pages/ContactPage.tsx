import { ContactInfoCard } from "../components/contact/ContactInfoCard";
import { ContactMap } from "../components/contact/ContactMap";

export function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 font-display text-3xl text-crust-900">צור קשר</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ContactInfoCard />
        <ContactMap />
      </div>
    </section>
  );
}
