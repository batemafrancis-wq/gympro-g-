import { Suspense } from "react";
import Image from "next/image";
import { TourForm } from "@/components/forms";
import { PageHero, Section } from "@/components/ui";
import { locations } from "@/lib/data";

export const metadata = { title: "Book a Facility Tour" };

export default function TourPage() {
  return (
    <>
      <PageHero
        kicker="Facility Tour"
        title="Walk the floor. Then decide."
        body="Thirty minutes with a concierge and a coach. Complimentary at every club. No hard close."
        image="/images/locker.jpg"
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Suspense fallback={<div className="border border-line p-8 text-muted">Loading form…</div>}>
            <TourForm />
          </Suspense>
          <div>
            <h2 className="font-display text-3xl uppercase">What you’ll see</h2>
            <ul className="mt-6 space-y-4 text-cream-2">
              <li>Strength hall, cycle theater or turf — depending on the club</li>
              <li>A class in progress, from the perimeter</li>
              <li>Recovery rooms and locker hospitality</li>
              <li>A straight membership recommendation</li>
            </ul>
            <div className="mt-10 grid gap-4">
              {locations.map((club) => (
                <div key={club.id} className="flex gap-4 border border-line p-4">
                  <div className="relative h-20 w-28 shrink-0">
                    <Image src={club.image} alt="" fill className="object-cover" sizes="112px" />
                  </div>
                  <div>
                    <p className="font-display text-xl uppercase">{club.name}</p>
                    <p className="text-sm text-muted">
                      {club.address}, {club.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
