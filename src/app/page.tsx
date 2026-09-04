import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, Kicker, Section } from "@/components/ui";
import { classTypes, memberships, stats, stories, trainers } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Lapo Gym training floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-36 md:px-8">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold">New York · Est. 2014</p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl uppercase leading-[0.88] tracking-wide md:text-8xl lg:text-[7.4rem]">
            Train without compromise.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-2">
            Three performance clubs. Intelligent programming. Hospitality that feels private.
            The primary move is simple: join Lapo.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/join" className="gold-btn px-8 py-4 text-[13px]">
              Join Now
            </Link>
            <Link href="/tour" className="ghost-btn px-8 py-4">
              Book a Free Tour
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-line px-6 py-8 md:border-r md:last:border-r-0">
              <p className="font-display text-4xl text-gold md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Kicker>The club</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-6xl">
              Rooms built for work, not for show.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-gold">
            Explore services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              href: "/services/group-fitness",
              image: "/images/group-fitness.jpg",
              title: "Group Fitness",
              body: "HIIT, cycle, boxing, pilates, sculpt. Coached classes with a point of view.",
            },
            {
              href: "/services/personal-training",
              image: "/images/pt-session.jpg",
              title: "Personal Training",
              body: "Screens, blocks, and coaches who remember last month’s numbers.",
            },
            {
              href: "/schedule",
              image: "/images/cycling.jpg",
              title: "Live Schedule",
              body: "Eighty-plus sessions a week across Downtown, Westside, and Harbor.",
            },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="group relative block min-h-[420px] overflow-hidden">
              <Image src={card.image} alt={card.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-3xl uppercase">{card.title}</h3>
                <p className="mt-2 text-sm text-cream-2">{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-y border-line bg-ink-2">
        <Section className="py-20">
          <Kicker>Programming</Kicker>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase md:text-6xl">A week at Lapo is not a playlist of trends.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {classTypes.slice(0, 4).map((item) => (
              <article key={item.id}>
                <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="25vw" />
                </div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{item.duration} min · intensity {item.intensity}/5</p>
                <h3 className="mt-2 font-display text-2xl uppercase">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.blurb}</p>
              </article>
            ))}
          </div>
          <Link href="/schedule" className="mt-10 inline-flex ghost-btn px-6 py-3">
            View class calendar
          </Link>
        </Section>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[520px]">
            <Image src="/images/woman-lift.jpg" alt="Member training at Lapo" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <Kicker>Memberships</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-6xl">Join the floor. Then never shop gyms again.</h2>
            <p className="mt-5 text-cream-2">
              Studio for a focused start. Performance for unlimited access to every club. Black for the private layer — PT, recovery, concierge.
            </p>
            <ul className="mt-8 space-y-3">
              {memberships.map((plan) => (
                <li key={plan.id} className="flex items-center justify-between border-b border-line py-3">
                  <span className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold" />
                    <span className="font-display text-xl uppercase">{plan.name}</span>
                  </span>
                  <span className="text-gold">${plan.price}/mo</span>
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="gold-btn mt-8 inline-flex px-6 py-3">
              Compare plans
            </Link>
          </div>
        </div>
      </Section>

      <section className="bg-ink-2">
        <Section>
          <div className="flex items-end justify-between gap-6">
            <div>
              <Kicker>Coaches</Kicker>
              <h2 className="mt-3 font-display text-4xl uppercase md:text-6xl">The people on the floor.</h2>
            </div>
            <Link href="/trainers" className="hidden text-[11px] tracking-[0.2em] uppercase text-gold md:inline">
              Meet the team
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.slice(0, 3).map((trainer) => (
              <Link key={trainer.id} href="/trainers" className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={trainer.image} alt={trainer.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                </div>
                <p className="mt-4 font-display text-2xl uppercase">{trainer.name}</p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-gold">{trainer.role}</p>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <Kicker>Proof</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase md:text-6xl">Success is a training habit, not a before photo.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {stories.slice(0, 2).map((story) => (
            <article key={story.id} className="grid overflow-hidden border border-line md:grid-cols-2">
              <div className="relative min-h-[280px]">
                <Image src={story.image} alt={story.name} fill className="object-cover" sizes="30vw" />
              </div>
              <div className="flex flex-col justify-center p-7">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{story.result}</p>
                <p className="mt-4 text-lg leading-relaxed text-cream-2">“{story.quote}”</p>
                <p className="mt-5 font-display text-xl uppercase">{story.name}</p>
                <p className="text-xs text-muted">{story.club} · {story.months} months in</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/stories" className="mt-8 inline-flex text-[11px] tracking-[0.2em] uppercase text-gold">
          All success stories →
        </Link>
      </Section>

      <CtaBand
        title="Your first session is a membership, not a maybe."
        body="Join now for instant class access — or book a complimentary tour if you want to walk the floor first."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/tour", label: "Book a Tour" }}
      />
    </>
  );
}
