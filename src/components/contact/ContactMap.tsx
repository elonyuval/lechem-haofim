import { businessInfo } from "../../data/businessInfo";

export function ContactMap() {
  const query = encodeURIComponent(
    `${businessInfo.address.street}, ${businessInfo.address.city}`,
  );

  return (
    <iframe
      title="מפה - מיקום העסק"
      className="h-64 w-full rounded-2xl border border-crust-100 md:h-full"
      loading="lazy"
      src={`https://www.google.com/maps?q=${query}&output=embed`}
    />
  );
}
