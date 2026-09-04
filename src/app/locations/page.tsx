import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { locations } from "@/lib/data";

export const metadata = { title: "Locations & Contact" };

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Locations"
        title="Three clubs. One standard."
        body="Downtown for the original hall. Westside for residential rhythm. Harbor for turf and morning light."
        image="/images/location-downtown.jpg"
        actions={
          <>
            <Link href="/tour" className="gold-btn px-6 py-3">Book a facility tour</Link>
            <Link href="/contact" className="ghost-btn px-6 py-3">Contact</Link>
          </>
        }
      />
      <Section>
        <div className="grid gap-10">
          {locations.map((club) => (
            <article key={club.id} className="grid overflow-hidden border border-line lg:grid-cols-2">
              <div className="relative min-h-[340px]">
                <Image src={club.image} alt={club.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="bg-ink-2 p-8 md:p-10">
                <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{club.neighborhood}</p>
                <h2 className="mt-2 font-display text-4xl uppercase">{club.name}</h2>
                <p className="mt-4 text-cream-2">{club.description}</p>
                <p className="mt-5 text-sm text-muted">
                  {club.address}
                  <br />
                  {club.city}
                  <br />
                  {club.phone}
                </p>
                <p className="mt-4 text-sm text-cream-2">
                  {club.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">{club.size}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {club.amenities.map((item) => (
                    <li key={item} className="border border-line px-3 py-1 text-xs text-cream-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/tour?club=${club.id}`} className="gold-btn mt-8 inline-flex px-5 py-3">
                  Tour {club.shortName}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Walk the floor before you commit — or don’t."
        body="Most members join from the site. Tours are free if you want the rooms in person."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/contact", label: "Write to us" }}
      />
    </>
  );
}
