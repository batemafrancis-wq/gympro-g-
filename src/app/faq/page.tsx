"use client";

import { useState } from "react";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        kicker="FAQs"
        title="Straight answers."
        body="Membership mechanics, booking windows, and what to bring. If it isn’t here, write the desk."
        image="/images/yoga.jpg"
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-line border border-line">
          {faqs.map((item, index) => (
            <button
              key={item.q}
              type="button"
              className="block w-full px-6 py-5 text-left"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <p className="font-display text-2xl uppercase text-cream">{item.q}</p>
              {open === index ? <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p> : null}
            </button>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Still deciding?"
        body="Join now, or walk a club on us."
        primary={{ href: "/join", label: "Join Now" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
