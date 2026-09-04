import Image from "next/image";
import Link from "next/link";
import { CtaBand, Kicker, PageHero, Section } from "@/components/ui";
import { classTypes } from "@/lib/data";

export const metadata = { title: "Group Fitness" };

export default function GroupFitnessPage() {
  return (
    <>
      <PageHero
        kicker="Group Fitness"
        title="Show up. Get coached. Leave different."
        body="Every Lapo class is written, timed, and scaled in the room. You will never be left to copy the person in front of you."
        image="/images/hiit.jpg"
        actions={<Link href="/schedule" className="gold-btn px-6 py-3">Book a class</Link>}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker>How we run rooms</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Small enough to coach.</h2>
            <p className="mt-5 leading-relaxed text-cream-2">
              Caps sit between 10 and 28 depending on the format. Coaches walk the floor. Music is a tool, not the product. If a class is full, the waitlist is real.
            </p>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/images/cycling.jpg" alt="Cycle Forge class" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {classTypes.map((item) => (
            <article key={item.id} className="border border-line bg-ink-2">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-6">
                <p className="text-[11px] tracking-[0.18em] uppercase text-gold">{item.duration} min</p>
                <h3 className="mt-2 font-display text-2xl uppercase">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        title="The calendar is the product."
        body="Filter by club, format, and coach. Members book seven days out."
        primary={{ href: "/schedule", label: "Open schedule" }}
        secondary={{ href: "/join", label: "Join Now" }}
      />
    </>
  );
}
