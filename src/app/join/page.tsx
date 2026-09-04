import { Suspense } from "react";
import { JoinForm } from "@/components/forms";
import { PageHero, Section } from "@/components/ui";
import { memberships } from "@/lib/data";

export const metadata = { title: "Join Now" };

export default function JoinPage() {
  return (
    <>
      <PageHero
        kicker="Join Now"
        title="Membership starts on this page."
        body="This is the primary action. Choose a plan, a home club, and you’re on the floor. Demo checkout — nothing is charged."
        image="/images/kettlebell.jpg"
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Suspense fallback={<div className="border border-line p-8 text-muted">Loading…</div>}>
            <JoinForm />
          </Suspense>
          <aside className="space-y-5">
            {memberships.map((plan) => (
              <div key={plan.id} className="border border-line p-6">
                <p className="font-display text-2xl uppercase">{plan.name}</p>
                <p className="text-gold">${plan.price}/mo</p>
                <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}
