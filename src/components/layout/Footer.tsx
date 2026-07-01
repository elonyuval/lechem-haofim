import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { businessInfo } from "../../data/businessInfo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-crust-100 bg-crust-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-crust-800">
            {businessInfo.businessNameHe}
          </h3>
          <p className="text-sm text-crust-600">{businessInfo.kashrut.statementHe}</p>
        </div>

        <div className="space-y-2 text-sm text-crust-700">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>
              {businessInfo.address.street}, {businessInfo.address.city}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href={`tel:${businessInfo.phones.orders}`} className="hover:underline">
              הזמנות: {businessInfo.phones.orders}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href={`tel:${businessInfo.phones.store}`} className="hover:underline">
              חנות: {businessInfo.phones.store}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            <a href={`mailto:${businessInfo.email}`} className="hover:underline">
              {businessInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          {businessInfo.socials.instagram && (
            <a
              href={businessInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="אינסטגרם"
              className="rounded-full bg-white p-2 text-crust-700 shadow hover:text-crust-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {businessInfo.socials.facebook && (
            <a
              href={businessInfo.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="פייסבוק"
              className="rounded-full bg-white p-2 text-crust-700 shadow hover:text-crust-500"
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-crust-100 py-4 text-center text-xs text-crust-500">
        © {new Date().getFullYear()} {businessInfo.businessNameHe}
      </div>
    </footer>
  );
}
