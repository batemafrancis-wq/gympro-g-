import Image from "next/image";
import Link from "next/link";
import { CtaBand, Kicker, PageHero, Section } from "@/components/ui";
import { values } from "@/lib/data";

export const metadata = { title: "About Our Gym" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Our Gym"
        title="A club named for the work."
        body="Lapo was founded in 2014 to build rooms where training is treated as craft — not as a backdrop for content."
        image="/images/strength.jpg"
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Kicker>Our story</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">From one SoHo floor to three clubs.</h2>
            <p className="mt-5 leading-relaxed text-cream-2">
              The original Mercer Street hall was a strength room with a boxing ring and a front desk that remembered names. Members asked for a second club, then a third. The standard did not loosen when the square footage did.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today Downtown, Westside, and Harbor share programming, coaches, and a membership that can move with you. The gold on the door is the same. The work inside is the point.
            </p>
          </div>
          <div className="relative min-h-[420px]">
            <Image src="/images/weights.jpg" alt="Lapo weight room" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="border border-line bg-ink-2 p-8">
              <h3 className="font-display text-2xl uppercase text-gold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-2">{value.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/trainers" className="gold-btn px-6 py-3">
            Meet the trainers
          </Link>
          <Link href="/stories" className="ghost-btn px-6 py-3">
            Success stories
          </Link>
        </div>
      </Section>
      <CtaBand
        title="Come see the rooms."
        body="A complimentary tour is thirty minutes with a coach — then you decide."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/tour", label: "Book a tour" }}
      />
    </>
  );
}
