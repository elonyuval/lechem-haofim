import { hostingPackages } from "../data/hostingPackages";
import { PackageCard } from "../components/hosting/PackageCard";

export function HostingPackagesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-extrabold text-crust-900">חבילות אירוח</h1>
      <p className="mb-8 text-crust-600">חבילות מוכנות לאירועים בכל גודל.</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {hostingPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
