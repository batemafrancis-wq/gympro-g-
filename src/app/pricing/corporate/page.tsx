"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { CtaBand, Field, inputClass, Kicker, PageHero, Section } from "@/components/ui";
import { corporatePerks } from "@/lib/data";

export default function CorporatePage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHero
        kicker="Corporate Plans"
        title="A club benefit that people actually use."
        body="Lapo for teams is membership, workshops, and reporting — not a forgotten gym stipend."
        image="/images/group-fitness.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker>Included</Kicker>
            <h2 className="mt-3 font-display text-4xl uppercase">Built for companies of 8+</h2>
            <ul className="mt-8 space-y-4">
              {corporatePerks.map((perk) => (
                <li key={perk} className="flex gap-3 text-cream-2">
                  <Check className="mt-1 h-4 w-4 text-gold" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-ink-2 p-8">
            {done ? (
              <p className="text-lg text-gold-2">
                Request received. A membership lead will reply within one business day.
              </p>
            ) : (
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <h3 className="font-display text-3xl uppercase">Request a proposal</h3>
                <Field label="Company">
                  <input required className={inputClass} />
                </Field>
                <Field label="Your name">
                  <input required className={inputClass} />
                </Field>
                <Field label="Work email">
                  <input type="email" required className={inputClass} />
                </Field>
                <Field label="Team size">
                  <select className={inputClass} defaultValue="8-25">
                    <option>8–25</option>
                    <option>26–75</option>
                    <option>76–200</option>
                    <option>200+</option>
                  </select>
                </Field>
                <Field label="Notes">
                  <textarea rows={4} className={inputClass} />
                </Field>
                <button type="submit" className="gold-btn py-3">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
      <CtaBand
        title="Employees can still tour first."
        body="We host team walkthroughs at Downtown, Westside, and Harbor."
        primary={{ href: "/tour", label: "Book a tour" }}
        secondary={{ href: "/join", label: "Join as an individual" }}
      />
    </>
  );
}
