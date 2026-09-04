"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Field, inputClass } from "@/components/ui";
import { locations, memberships, demoMember } from "@/lib/data";
import { authenticate, writeMember, type MemberSession } from "@/lib/auth";
import { useClubLocation } from "@/components/providers";

function Success({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-gold/40 bg-gold/10 p-8">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Received</p>
      <h2 className="mt-3 font-display text-3xl uppercase">{title}</h2>
      <p className="mt-3 text-cream-2">{body}</p>
    </div>
  );
}

export function TourForm() {
  const params = useSearchParams();
  const { locationId } = useClubLocation();
  const preset = params.get("club") ?? locationId;
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <Success
        title="Your tour is on the board."
        body="A concierge will confirm by email within a few hours. Come in training shoes — you’ll walk the floor, not a sales office."
      />
    );
  }

  return (
    <form
      className="grid gap-4 border border-line bg-ink-2 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <h2 className="font-display text-3xl uppercase">Book a facility tour</h2>
      <p className="text-sm text-muted">Complimentary · 30 minutes · any club</p>
      <Field label="Full name">
        <input required className={inputClass} />
      </Field>
      <Field label="Email">
        <input type="email" required className={inputClass} />
      </Field>
      <Field label="Phone">
        <input required className={inputClass} />
      </Field>
      <Field label="Club">
        <select className={inputClass} defaultValue={preset}>
          {locations.map((club) => (
            <option key={club.id} value={club.id}>
              {club.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred time">
        <select className={inputClass} defaultValue="weekday-am">
          <option value="weekday-am">Weekday morning</option>
          <option value="weekday-pm">Weekday evening</option>
          <option value="weekend">Weekend</option>
        </select>
      </Field>
      <button type="submit" className="gold-btn mt-2 py-3">
        Request tour
      </button>
    </form>
  );
}

export function ContactForm() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <Success
        title="Message received."
        body="The Downtown desk reads the inbox. You’ll hear back within one business day."
      />
    );
  }
  return (
    <form
      className="grid gap-4 border border-line bg-ink-2 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <h2 className="font-display text-3xl uppercase">Contact Lapo</h2>
      <Field label="Name">
        <input required className={inputClass} />
      </Field>
      <Field label="Email">
        <input type="email" required className={inputClass} />
      </Field>
      <Field label="Topic">
        <select className={inputClass} defaultValue="membership">
          <option value="membership">Membership</option>
          <option value="pt">Personal training</option>
          <option value="corporate">Corporate</option>
          <option value="press">Press</option>
        </select>
      </Field>
      <Field label="Message">
        <textarea required rows={5} className={inputClass} />
      </Field>
      <button type="submit" className="gold-btn py-3">
        Send message
      </button>
    </form>
  );
}

export function JoinForm() {
  const params = useSearchParams();
  const router = useRouter();
  const { locationId } = useClubLocation();
  const planId = params.get("plan") ?? "performance";
  const selected = useMemo(
    () => memberships.find((item) => item.id === planId) ?? memberships[1],
    [planId],
  );
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <Success
        title="Welcome to Lapo."
        body="Your membership is active in this demo. Head to the portal to book classes with the same email."
      />
    );
  }

  return (
    <form
      className="grid gap-4 border border-line bg-ink-2 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const session: MemberSession = {
          name: String(data.get("name") || "New Member"),
          email: String(data.get("email") || demoMember.email),
          plan: selected.name,
          planId: selected.id,
          locationId: (data.get("club") as MemberSession["locationId"]) || locationId,
          memberSince: "April 2026",
          nextBill: "May 12, 2026",
          amount: selected.price,
          status: "Active",
        };
        writeMember(session);
        setDone(true);
        setTimeout(() => router.push("/portal"), 900);
      }}
    >
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Join Now</p>
      <h2 className="font-display text-3xl uppercase">{selected.name} membership</h2>
      <p className="text-sm text-muted">
        ${selected.price}/month · month-to-month after 30 days
      </p>
      <Field label="Plan">
        <select name="plan" className={inputClass} defaultValue={selected.id}>
          {memberships.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.name} — ${plan.price}/mo
            </option>
          ))}
        </select>
      </Field>
      <Field label="Home club">
        <select name="club" className={inputClass} defaultValue={locationId}>
          {locations.map((club) => (
            <option key={club.id} value={club.id}>
              {club.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Full name">
        <input name="name" required className={inputClass} />
      </Field>
      <Field label="Email">
        <input name="email" type="email" required className={inputClass} />
      </Field>
      <Field label="Card number">
        <input required placeholder="ACCT-000015" className={inputClass} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Expiry">
          <input required placeholder="05/28" className={inputClass} />
        </Field>
        <Field label="CVC">
          <input required placeholder="123" className={inputClass} />
        </Field>
      </div>
      <button type="submit" className="gold-btn mt-2 py-3">
        Confirm membership
      </button>
      <p className="text-xs text-muted">Demo checkout — no charge is processed.</p>
    </form>
  );
}

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <form
      className="grid gap-4 border border-line bg-ink-2 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = String(data.get("email") || "");
        const password = String(data.get("password") || "");
        const session = authenticate(email, password);
        if (!session) {
          setError("Use the demo credentials below.");
          return;
        }
        writeMember(session);
        router.push("/portal");
      }}
    >
      <h2 className="font-display text-3xl uppercase">Member portal</h2>
      <p className="text-sm text-muted">
        Demo login: {demoMember.email} / {demoMember.password}
      </p>
      <Field label="Email">
        <input name="email" type="email" required defaultValue={demoMember.email} className={inputClass} />
      </Field>
      <Field label="Password">
        <input name="password" type="password" required defaultValue={demoMember.password} className={inputClass} />
      </Field>
      {error ? <p className="text-sm text-gold">{error}</p> : null}
      <button type="submit" className="gold-btn py-3">
        Sign in
      </button>
    </form>
  );
}
