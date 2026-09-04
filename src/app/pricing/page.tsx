import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand, Kicker, PageHero, Section } from "@/components/ui";
import { memberships } from "@/lib/data";

export const metadata = { title: "Pricing & Memberships" };

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing & Memberships"
        title="Pick a key. Then use it."
        body="Month-to-month after thirty days. The primary action is joining — tours are there if you want to walk the floor first."
        image="/images/barbells.jpg"
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {memberships.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col border p-8 ${
                plan.featured ? "border-gold bg-ink-2" : "border-line bg-ink-2"
              }`}
            >
              {plan.featured ? (
                <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Most chosen</p>
              ) : (
                <p className="text-[11px] tracking-[0.28em] uppercase text-muted">Membership</p>
              )}
              <h2 className="mt-3 font-display text-4xl uppercase">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <p className="mt-6 font-display text-5xl text-gold">
                ${plan.price}
                <span className="text-lg text-muted">/{plan.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-cream-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/join?plan=${plan.id}`} className="gold-btn mt-10 grid place-items-center py-3">
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-8 border border-line p-8 md:grid-cols-2">
          <div>
            <Kicker>Teams</Kicker>
            <h2 className="mt-3 font-display text-3xl uppercase">Corporate plans from 8 employees</h2>
            <p className="mt-4 text-cream-2">
              Volume pricing, on-site workshops, and a dedicated account lead. Keep the same coaching standard off-site.
            </p>
          </div>
          <div className="flex items-end">
            <Link href="/pricing/corporate" className="ghost-btn px-6 py-3">
              Explore corporate
            </Link>
          </div>
        </div>
      </Section>
      <CtaBand
        title="Not ready to join?"
        body="Walk any club on us. Thirty minutes, a coach, and a straight recommendation."
        primary={{ href: "/tour", label: "Book a free tour" }}
        secondary={{ href: "/faq", label: "Read FAQs" }}
      />
    </>
  );
}
