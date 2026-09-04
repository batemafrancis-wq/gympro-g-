import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand, Kicker, PageHero, Section } from "@/components/ui";
import { trainers } from "@/lib/data";

export const metadata = { title: "Personal Training" };

const packages = [
  { name: "Foundation 4", price: 520, detail: "4 sessions · movement screen included" },
  { name: "Build 8", price: 960, detail: "8 sessions · programming between visits" },
  { name: "Transform 12", price: 1320, detail: "12 sessions · monthly recap with your coach" },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        kicker="Personal Training"
        title="Private work, public standards."
        body="Lapo PT is not a side hustle on the gym floor. It’s a coached block with a screen, a plan, and a coach who keeps the notes."
        image="/images/pt-session.jpg"
        actions={<Link href="/contact" className="gold-btn px-6 py-3">Request a coach</Link>}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[440px]">
            <Image src="/images/pt-cardio.jpg" alt="Coach and member on the floor" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <Kicker>The method</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Screen. Block. Repeat.</h2>
            <ul className="mt-6 space-y-4 text-cream-2">
              {[
                "90-minute movement and goal screen before session one",
                "Coach matching by specialty, not by leftover hours",
                "4, 8, or 12-week blocks with written programming",
                "Black members receive four sessions every month",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="border border-line bg-ink-2 p-8">
              <h3 className="font-display text-3xl uppercase">{item.name}</h3>
              <p className="mt-4 font-display text-4xl text-gold">${item.price}</p>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
              <Link href="/contact" className="gold-btn mt-8 inline-flex px-5 py-3">
                Inquire
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <section className="bg-ink-2">
        <Section>
          <Kicker>PT leads</Kicker>
          <h2 className="mt-3 font-display text-4xl uppercase">Who you’ll work with</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.slice(0, 3).map((trainer) => (
              <article key={trainer.id}>
                <div className="relative aspect-[3/4]">
                  <Image src={trainer.image} alt={trainer.name} fill className="object-cover" sizes="33vw" />
                </div>
                <p className="mt-4 font-display text-2xl uppercase">{trainer.name}</p>
                <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{trainer.specialties.join(" · ")}</p>
              </article>
            ))}
          </div>
        </Section>
      </section>
      <CtaBand
        title="Start with a screen, not a sales call."
        body="Tell us the goal. We’ll match a coach and a club."
        primary={{ href: "/contact", label: "Request PT" }}
        secondary={{ href: "/join", label: "Join with Black" }}
      />
    </>
  );
}
