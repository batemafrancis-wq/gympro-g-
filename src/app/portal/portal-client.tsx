"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { clearMember, readBookings, readMember, writeMember, type MemberSession } from "@/lib/auth";
import { locations, memberships } from "@/lib/data";
import { Field, inputClass, Section } from "@/components/ui";

function PortalNav() {
  const pathname = usePathname();
  const links = [
    { href: "/portal", label: "Account & Billing" },
    { href: "/portal/bookings", label: "Class Booking Manager" },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase ${
            pathname === link.href ? "gold-btn" : "ghost-btn"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function AccountPortal() {
  const router = useRouter();
  const [member, setMember] = useState<MemberSession | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const session = readMember();
    if (!session) {
      router.replace("/login");
      return;
    }
    setMember(session);
  }, [router]);

  if (!member) {
    return (
      <Section>
        <p className="text-muted">Loading member desk…</p>
      </Section>
    );
  }

  return (
    <Section>
      <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Member portal</p>
      <h1 className="mt-3 font-display text-5xl uppercase">My account</h1>
      <p className="mt-3 text-cream-2">
        Signed in as {member.name}. Home club and billing live here.
      </p>
      <div className="mt-8">
        <PortalNav />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <article className="border border-gold bg-ink-2 p-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Plan</p>
          <p className="mt-3 font-display text-3xl uppercase">{member.plan}</p>
          <p className="mt-2 text-sm text-muted">
            ${member.amount}/mo · Next bill {member.nextBill}
          </p>
          <p className="mt-4 text-sm text-cream-2">Status: {member.status}</p>
        </article>
        <article className="border border-line bg-ink-2 p-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Member since</p>
          <p className="mt-3 font-display text-3xl uppercase">{member.memberSince}</p>
          <p className="mt-2 text-sm text-muted">{member.email}</p>
        </article>
        <article className="border border-line bg-ink-2 p-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Upcoming classes</p>
          <p className="mt-3 font-display text-3xl uppercase">{readBookings().length}</p>
          <Link href="/portal/bookings" className="mt-4 inline-block text-sm text-gold">
            Manage bookings →
          </Link>
        </article>
      </div>
      <form
        className="mt-10 grid max-w-xl gap-4 border border-line bg-ink-2 p-6"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const planId = String(data.get("plan"));
          const plan = memberships.find((item) => item.id === planId) ?? memberships[1];
          const next: MemberSession = {
            ...member,
            name: String(data.get("name")),
            locationId: data.get("club") as MemberSession["locationId"],
            plan: plan.name,
            planId: plan.id,
            amount: plan.price,
          };
          writeMember(next);
          setMember(next);
          setSaved(true);
        }}
      >
        <h2 className="font-display text-2xl uppercase">Update profile</h2>
        <Field label="Name">
          <input name="name" defaultValue={member.name} className={inputClass} />
        </Field>
        <Field label="Home club">
          <select name="club" defaultValue={member.locationId} className={inputClass}>
            {locations.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Plan">
          <select name="plan" defaultValue={member.planId} className={inputClass}>
            {memberships.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name} — ${plan.price}/mo
              </option>
            ))}
          </select>
        </Field>
        <button type="submit" className="gold-btn py-3">
          Save changes
        </button>
        {saved ? <p className="text-sm text-gold">Account updated.</p> : null}
      </form>
      <button
        type="button"
        className="mt-8 text-[11px] tracking-[0.18em] uppercase text-muted hover:text-gold"
        onClick={() => {
          clearMember();
          router.push("/login");
        }}
      >
        Sign out
      </button>
    </Section>
  );
}

export function BookingsPortal() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [bookings, setBookings] = useState<ReturnType<typeof readBookings>>([]);

  useEffect(() => {
    if (!readMember()) {
      router.replace("/login");
      return;
    }
    setBookings(readBookings());
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <Section>
        <p className="text-muted">Loading bookings…</p>
      </Section>
    );
  }

  return (
    <Section>
      <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Member portal</p>
      <h1 className="mt-3 font-display text-5xl uppercase">Class booking manager</h1>
      <p className="mt-3 max-w-2xl text-cream-2">
        Cancel a hold or jump back to the live calendar. Bookings in this demo stay in your browser.
      </p>
      <div className="mt-8">
        <PortalNav />
      </div>
      <div className="mt-10 space-y-4">
        {bookings.length === 0 ? (
          <div className="border border-line p-8">
            <p className="text-cream-2">No upcoming classes yet.</p>
            <Link href="/schedule" className="gold-btn mt-5 inline-flex px-5 py-3">
              Open schedule
            </Link>
          </div>
        ) : (
          bookings.map((booking) => (
            <article key={booking.id} className="flex flex-col justify-between gap-4 border border-line bg-ink-2 p-5 md:flex-row md:items-center">
              <div>
                <p className="font-display text-2xl uppercase">{booking.className}</p>
                <p className="text-sm text-muted">
                  {booking.date} · {booking.time} · {booking.location} · {booking.trainer}
                </p>
              </div>
              <button
                type="button"
                className="ghost-btn px-4 py-2"
                onClick={() => {
                  const next = readBookings().filter((item) => item.id !== booking.id);
                  localStorage.setItem("lapo-bookings", JSON.stringify(next));
                  setBookings(next);
                }}
              >
                Cancel
              </button>
            </article>
          ))
        )}
      </div>
      <Link href="/schedule" className="mt-8 inline-flex text-[11px] tracking-[0.2em] uppercase text-gold">
        Book another class →
      </Link>
    </Section>
  );
}
