import { PageHero, Section } from "@/components/ui";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        body="The house rules for membership, the site, and the floor."
        image="/images/barbells.jpg"
      />
      <Section>
        <article className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-cream-2">
          <p>By joining Lapo Gym or using this website you agree to these terms. Memberships are month-to-month after an initial 30-day period and may be frozen for travel or medical leave.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Membership</h2>
          <p>Fees are billed in advance. Cancel with 14 days’ notice. Guest passes and class bookings follow the rules of your plan. Black membership PT sessions do not roll over beyond 30 days.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Conduct</h2>
          <p>Rack your weights. Follow coach instructions. Photography of other members without consent is not allowed. Lapo may suspend access for unsafe or abusive behavior.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Liability</h2>
          <p>Training involves risk. Members represent they are cleared to exercise and will stop if something feels wrong. This website is a demonstration and does not process real payments.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Contact</h2>
          <p>legal@lapogym.com · (212) 555-0148</p>
        </article>
      </Section>
    </>
  );
}
