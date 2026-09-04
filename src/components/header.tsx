"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { locations, nav } from "@/lib/data";
import { useClubLocation } from "@/components/providers";

export function Header() {
  const pathname = usePathname();
  const { locationId, setLocationId, location } = useClubLocation();
  const [open, setOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setLocOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-gold text-[13px] font-display tracking-[0.18em] text-gold">
            L
          </span>
          <span className="leading-none">
            <span className="block font-display text-[22px] tracking-[0.32em]">LAPO</span>
            <span className="block text-[9px] tracking-[0.46em] text-gold">GYM</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors ${
                  pathname.startsWith(item.href) ? "text-gold" : "text-cream-2 hover:text-cream"
                }`}
              >
                {item.label}
                <ChevronDown className="h-3 w-3 opacity-60" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-20 w-52 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="border border-line bg-ink-2 p-2 shadow-2xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-[11px] tracking-[0.16em] uppercase text-cream-2 hover:bg-ink-3 hover:text-gold"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setLocOpen((v) => !v)}
              className="flex items-center gap-2 border border-line px-3 py-2 text-[10px] tracking-[0.16em] uppercase text-cream-2 hover:border-gold hover:text-gold"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {location.shortName}
              <ChevronDown className="h-3 w-3" />
            </button>
            {locOpen ? (
              <div className="absolute right-0 top-full z-30 mt-2 w-56 border border-line bg-ink-2 p-2">
                {locations.map((club) => (
                  <button
                    key={club.id}
                    type="button"
                    onClick={() => {
                      setLocationId(club.id);
                      setLocOpen(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-[11px] tracking-[0.12em] uppercase ${
                      club.id === locationId ? "bg-ink-3 text-gold" : "text-cream-2 hover:text-gold"
                    }`}
                  >
                    {club.name}
                    <span className="mt-0.5 block text-[10px] tracking-normal text-muted normal-case">
                      {club.neighborhood}
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/login"
            className="hidden text-[10px] font-semibold tracking-[0.2em] uppercase text-cream-2 hover:text-gold md:inline"
          >
            Member
          </Link>
          <Link href="/join" className="gold-btn hidden px-4 py-2.5 sm:inline-flex">
            Join Now
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-line text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line bg-ink lg:hidden">
          <div className="px-5 py-6">
            <p className="mb-3 text-[10px] tracking-[0.28em] uppercase text-gold">Club</p>
            <div className="mb-6 grid gap-2">
              {locations.map((club) => (
                <button
                  key={club.id}
                  type="button"
                  onClick={() => setLocationId(club.id)}
                  className={`flex items-center justify-between border px-3 py-3 text-left text-sm ${
                    club.id === locationId ? "border-gold text-gold" : "border-line text-cream-2"
                  }`}
                >
                  {club.name}
                  <span className="text-xs text-muted">{club.neighborhood}</span>
                </button>
              ))}
            </div>
            {nav.map((item) => (
              <div key={item.href} className="mb-5">
                <p className="mb-2 text-[10px] tracking-[0.28em] uppercase text-gold">{item.label}</p>
                <div className="grid gap-1">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="py-1.5 text-lg text-cream">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-4 grid gap-3">
              <Link href="/join" className="gold-btn grid place-items-center py-3">
                Join Now
              </Link>
              <Link href="/login" className="ghost-btn grid place-items-center py-3">
                Member Portal
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
