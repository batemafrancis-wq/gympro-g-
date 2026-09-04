"use client";

import { useState } from "react";
import { CtaBand, Field, inputClass, PageHero, Section } from "@/components/ui";
import { jobs } from "@/lib/data";

export default function CareersPage() {
  const [role, setRole] = useState(jobs[0].title);
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero
        kicker="Careers"
        title="Work the floor we built."
        body="Coaches, concierge, and performance medicine. Lapo hires for taste and standards — not volume."
        image="/images/pt-session.jpg"
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <article key={job.id} className="border border-line bg-ink-2 p-7">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                {job.team} · {job.type}
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase">{job.title}</h2>
              <p className="mt-2 text-sm text-muted">{job.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream-2">{job.summary}</p>
              <button type="button" className="gold-btn mt-6 px-5 py-2" onClick={() => setRole(job.title)}>
                Apply
              </button>
            </article>
          ))}
        </div>
        <div className="mt-14 border border-line bg-ink-2 p-8">
          {done ? (
            <p className="text-lg text-gold-2">Application received. Talent will follow up if there’s a fit.</p>
          ) : (
            <form
              className="grid gap-4 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <h2 className="font-display text-3xl uppercase md:col-span-2">Apply</h2>
              <Field label="Role">
                <input value={role} onChange={(e) => setRole(e.target.value)} className={inputClass} />
              </Field>
              <Field label="Name">
                <input required className={inputClass} />
              </Field>
              <Field label="Email">
                <input type="email" required className={inputClass} />
              </Field>
              <Field label="City">
                <input required className={inputClass} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Why Lapo">
                  <textarea required rows={5} className={inputClass} />
                </Field>
              </div>
              <button type="submit" className="gold-btn py-3 md:col-span-2">
                Submit application
              </button>
            </form>
          )}
        </div>
      </Section>
      <CtaBand
        title="Not applying — joining?"
        body="The other door is membership."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
