import { Suspense } from "react";
import { ContactForm } from "@/components/forms";
import { PageHero, Section } from "@/components/ui";
import { brand, locations } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Write the desk."
        body="Membership, press, PT, or a question the FAQ didn’t cover. Downtown reads first."
        image="/images/location-westside.jpg"
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Suspense fallback={<div className="border border-line p-8 text-muted">Loading form…</div>}>
            <ContactForm />
          </Suspense>
          <div className="space-y-8">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold">HQ</p>
              <p className="mt-3 text-lg text-cream-2">
                {brand.email}
                <br />
                {brand.phone}
              </p>
            </div>
            {locations.map((club) => (
              <div key={club.id} className="border-t border-line pt-6">
                <p className="font-display text-2xl uppercase">{club.name}</p>
                <p className="mt-2 text-sm text-muted">
                  {club.address}
                  <br />
                  {club.city}
                  <br />
                  {club.phone} · {club.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
