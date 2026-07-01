import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { businessInfo } from "../../data/businessInfo";

export function ContactInfoCard() {
  return (
    <div className="space-y-4 rounded-2xl border border-crust-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 shrink-0 text-crust-500" />
        <span>
          {businessInfo.address.street}, {businessInfo.address.city}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 shrink-0 text-crust-500" />
        <a href={`tel:${businessInfo.phones.orders}`} className="hover:underline">
          הזמנות: {businessInfo.phones.orders}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 shrink-0 text-crust-500" />
        <a href={`tel:${businessInfo.phones.store}`} className="hover:underline">
          חנות: {businessInfo.phones.store}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 shrink-0 text-crust-500" />
        <a href={`mailto:${businessInfo.email}`} className="hover:underline">
          {businessInfo.email}
        </a>
      </div>
      <div className="flex items-center gap-3 pt-2">
        {businessInfo.socials.instagram && (
          <a
            href={businessInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="אינסטגרם"
            className="rounded-full bg-crust-50 p-2 text-crust-600 hover:text-crust-500"
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
            className="rounded-full bg-crust-50 p-2 text-crust-600 hover:text-crust-500"
          >
            <Facebook className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}
