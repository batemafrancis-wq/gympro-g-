import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  body,
  image,
  actions,
}: {
  kicker: string;
  title: string;
  body?: string;
  image: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[58vh] overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8">
        <p className="text-[11px] tracking-[0.32em] uppercase text-gold">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl uppercase leading-[0.92] tracking-wide md:text-7xl">
          {title}
        </h1>
        {body ? <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-2">{body}</p> : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto max-w-7xl px-5 py-20 md:px-8 ${className}`}>{children}</section>;
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-[11px] tracking-[0.32em] uppercase text-gold">{children}</p>;
}

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <Image src="/images/deadlift.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] uppercase text-gold">Start here</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-lg text-cream-2">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="gold-btn px-6 py-3">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="ghost-btn px-6 py-3">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] tracking-[0.2em] uppercase text-muted">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition focus:border-gold";
