import { ShieldCheck } from "lucide-react";
import { businessInfo } from "../../data/businessInfo";

export function KashrutSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 font-display text-3xl text-crust-900">אודות וכשרות</h1>
      <p className="mb-8 text-crust-700">
        {businessInfo.businessNameHe} הוא עסק קייטרינג ומאפייה בנתניה, המתמחה במגשי
        אירוח לאירועים ולשמחות משפחתיות, מתוך מחויבות לאיכות, טריות וכשרות.
      </p>
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <ShieldCheck className="h-8 w-8 shrink-0 text-emerald-600" />
        <div>
          <p className="font-bold text-emerald-800">{businessInfo.kashrut.statementHe}</p>
          {businessInfo.kashrut.certifyingBody && (
            <p className="text-sm text-emerald-700">{businessInfo.kashrut.certifyingBody}</p>
          )}
        </div>
      </div>
    </section>
  );
}
