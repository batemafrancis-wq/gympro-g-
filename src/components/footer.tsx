"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, locations } from "@/lib/data";

function SocialIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="font-display text-3xl tracking-[0.28em]">LAPO</p>
          <p className="mt-1 text-[10px] tracking-[0.4em] text-gold">GYM · NEW YORK</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Three clubs. One standard. High-performance training rooms with the hospitality of a private club.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" className="grid h-10 w-10 place-items-center border border-line text-cream-2 hover:border-gold hover:text-gold" aria-label="Instagram">
              <SocialIcon className="h-4 w-4" path="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.95a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95Z" />
            </a>
            <a href="https://tiktok.com" className="grid h-10 w-10 place-items-center border border-line text-cream-2 hover:border-gold hover:text-gold" aria-label="TikTok">
              <SocialIcon className="h-4 w-4" path="M14.5 3c.4 2.6 1.8 4.4 4.5 4.8v3.1c-1.6 0-3.1-.5-4.5-1.4v6.7c0 4-2.7 6.8-6.7 6.8S1 20.2 1 16.2c0-3.8 2.6-6.5 6.3-6.8v3.3c-1.6.3-2.7 1.5-2.7 3.4 0 2 1.5 3.4 3.4 3.4s3.3-1.4 3.3-3.6V3h3.2Z" />
            </a>
            <a href="https://youtube.com" className="grid h-10 w-10 place-items-center border border-line text-cream-2 hover:border-gold hover:text-gold" aria-label="YouTube">
              <SocialIcon className="h-4 w-4" path="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.6V8.8l6.2 3.4-6.2 3.4Z" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-2">
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/schedule" className="hover:text-gold">Schedule</Link></li>
            <li><Link href="/pricing" className="hover:text-gold">Memberships</Link></li>
            <li><Link href="/trainers" className="hover:text-gold">Trainers</Link></li>
            <li><Link href="/tour" className="hover:text-gold">Book a Tour</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold">Clubs</p>
          <ul className="mt-4 space-y-4 text-sm text-cream-2">
            {locations.map((club) => (
              <li key={club.id}>
                <Link href="/locations" className="hover:text-gold">
                  {club.name}
                </Link>
                <p className="text-xs text-muted">
                  {club.address}
                  <br />
                  {club.hours[0].days} {club.hours[0].time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold">Newsletter</p>
          <p className="mt-4 text-sm text-muted">Programming notes, member events, and the occasional PR.</p>
          {done ? (
            <p className="mt-4 border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-2">
              You’re on the list.
            </p>
          ) : (
            <form
              className="mt-4 flex border border-line"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent px-3 py-3 text-sm text-cream outline-none placeholder:text-muted"
              />
              <button type="submit" className="gold-btn px-4">
                Join
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-muted">
            {brand.email}
            <br />
            {brand.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] tracking-[0.12em] uppercase text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Lapo Gym. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/site-map" className="hover:text-gold">Sitemap</Link>
            <Link href="/careers" className="hover:text-gold">Careers</Link>
            <Link href="/faq" className="hover:text-gold">FAQs</Link>
            <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
