import Image from "next/image";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { locations, trainers } from "@/lib/data";

export const metadata = { title: "Meet the Trainers" };

export default function TrainersPage() {
  return (
    <>
      <PageHero
        kicker="Meet the Trainers"
        title="Coaches who keep notes."
        body="Specialists, not generalists with a clipboard. Every Lapo coach is hired for a room they can actually run."
        image="/images/pt-consult.jpg"
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="grid overflow-hidden border border-line bg-ink-2 md:grid-cols-2">
              <div className="relative min-h-[360px]">
                <Image src={trainer.image} alt={trainer.name} fill className="object-cover" sizes="30vw" />
              </div>
              <div className="flex flex-col justify-center p-7">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{trainer.role}</p>
                <h2 className="mt-2 font-display text-3xl uppercase">{trainer.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-cream-2">{trainer.bio}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
                  {trainer.specialties.join(" · ")}
                </p>
                <p className="mt-3 text-xs text-muted">
                  {trainer.clubs
                    .map((id) => locations.find((l) => l.id === id)?.shortName)
                    .join(" · ")}
                </p>
                <p className="mt-3 text-[11px] text-gold">{trainer.certs.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Train with them this week."
        body="Book a class or request a personal-training screen."
        primary={{ href: "/schedule", label: "Class calendar" }}
        secondary={{ href: "/services/personal-training", label: "Personal training" }}
      />
    </>
  );
}
