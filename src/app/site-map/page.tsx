import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export const metadata = { title: "Sitemap" };

const groups = [
  {
    title: "Homepage",
    links: [{ href: "/", label: "Lapo Gym home" }],
  },
  {
    title: "Services & Classes",
    links: [
      { href: "/services", label: "Services overview" },
      { href: "/services/group-fitness", label: "Group Fitness" },
      { href: "/services/personal-training", label: "Personal Training" },
      { href: "/schedule", label: "Class Schedule" },
    ],
  },
  {
    title: "Pricing & Memberships",
    links: [
      { href: "/pricing", label: "Membership tiers" },
      { href: "/pricing/corporate", label: "Corporate plans" },
      { href: "/join", label: "Join Now" },
    ],
  },
  {
    title: "About Our Gym",
    links: [
      { href: "/about", label: "Our story & values" },
      { href: "/trainers", label: "Meet the trainers" },
      { href: "/stories", label: "Success stories" },
    ],
  },
  {
    title: "Locations & Contact",
    links: [
      { href: "/locations", label: "Clubs" },
      { href: "/tour", label: "Facility tour booking" },
      { href: "/contact", label: "Contact form" },
    ],
  },
  {
    title: "Member Portal",
    links: [
      { href: "/login", label: "Secure login" },
      { href: "/portal", label: "My account & billing" },
      { href: "/portal/bookings", label: "Class booking manager" },
    ],
  },
  {
    title: "Trust & compliance",
    links: [
      { href: "/faq", label: "FAQs" },
      { href: "/careers", label: "Careers" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        kicker="Sitemap"
        title="Every room on the site."
        body="A complete map of Lapo Gym — public pages and the member desk."
        image="/images/location-downtown.jpg"
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-2xl uppercase text-gold">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-cream-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
