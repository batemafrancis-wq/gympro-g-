import Image from "next/image";
import Link from "next/link";
import { CtaBand, Kicker, PageHero, Section } from "@/components/ui";
import { classTypes } from "@/lib/data";

export const metadata = { title: "Services & Classes" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services & Classes"
        title="Programming with a point of view."
        body="Group rooms, private coaching, and a live calendar that actually fills. Every session is coached — never babysat."
        image="/images/gym-floor.jpg"
        actions={
          <>
            <Link href="/join" className="gold-btn px-6 py-3">Join Now</Link>
            <Link href="/schedule" className="ghost-btn px-6 py-3">See the schedule</Link>
          </>
        }
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              href: "/services/group-fitness",
              image: "/images/group-fitness.jpg",
              title: "Group Fitness",
              body: "HIIT, cycle, boxing, pilates, yoga, and sculpt. Small enough to coach, large enough to push.",
            },
            {
              href: "/services/personal-training",
              image: "/images/pt-consult.jpg",
              title: "Personal Training",
              body: "Movement screens, 4–12 week blocks, and coaches assigned by goal — not by whoever is free.",
            },
            {
              href: "/schedule",
              image: "/images/boxing-class.jpg",
              title: "Class Schedule",
              body: "A live weekly calendar across three clubs. Filter by room, coach, and intensity.",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group border border-line bg-ink-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl uppercase">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-gold">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <section className="border-y border-line bg-ink-2">
        <Section>
          <Kicker>The rooms</Kicker>
          <h2 className="mt-3 font-display text-4xl uppercase md:text-6xl">What we coach.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {classTypes.map((item) => (
              <article key={item.id} className="grid gap-6 md:grid-cols-2">
                <div className="relative min-h-[200px]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                    {item.duration} min · intensity {item.intensity}/5
                  </p>
                  <h3 className="mt-2 font-display text-3xl uppercase">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>
      <CtaBand
        title="Pick a plan. Then pick a class."
        body="Membership unlocks the calendar. Tours are complimentary if you want to see the rooms first."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/tour", label: "Book a Tour" }}
      />
    </>
  );
}
