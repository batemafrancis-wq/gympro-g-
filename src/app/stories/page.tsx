import Image from "next/image";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { stories } from "@/lib/data";

export const metadata = { title: "Success Stories" };

export default function StoriesPage() {
  return (
    <>
      <PageHero
        kicker="Success Stories"
        title="The work, in their words."
        body="Not a catalog of before-and-afters. These are members who stayed long enough for the training to compound."
        image="/images/story-group.jpg"
      />
      <Section>
        <div className="grid gap-8">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className={`grid overflow-hidden border border-line md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[360px]">
                <Image src={story.image} alt={story.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="flex flex-col justify-center bg-ink-2 p-8 md:p-12">
                <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{story.result}</p>
                <p className="mt-5 text-2xl leading-relaxed text-cream">“{story.quote}”</p>
                <p className="mt-6 font-display text-2xl uppercase">{story.name}</p>
                <p className="text-sm text-muted">
                  {story.club} · {story.months} months at Lapo
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Write the next one."
        body="Join Performance and start logging the year."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/tour", label: "Tour a club" }}
      />
    </>
  );
}
