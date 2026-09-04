import { PageHero, Section } from "@/components/ui";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        body="How Lapo Gym handles member and visitor information."
        image="/images/location-harbor.jpg"
      />
      <Section>
        <article className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-cream-2">
          <p>Last updated April 1, 2026. This policy describes how Lapo Gym (“Lapo”, “we”) collects and uses information on lapogym.com and in our clubs.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Information we collect</h2>
          <p>Account details, billing information, class bookings, tour requests, newsletter emails, and club visit patterns needed to operate memberships. This demo site stores form and portal data in your browser only.</p>
          <h2 className="font-display text-2xl uppercase text-cream">How we use it</h2>
          <p>To provide memberships, book classes, send operational email, improve programming, and protect clubs and members. We do not sell personal information.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Sharing</h2>
          <p>Processors who help us with payments, email, and access control. Legal requests when required. Corporate account admins see attendance summaries, not medical notes.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Your choices</h2>
          <p>Update profile data in the member portal, unsubscribe from newsletters, or email hello@lapogym.com to request deletion. Some records are kept for accounting and safety.</p>
          <h2 className="font-display text-2xl uppercase text-cream">Contact</h2>
          <p>Privacy questions: privacy@lapogym.com · 88 Mercer Street, New York, NY 10012.</p>
        </article>
      </Section>
    </>
  );
}
