import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-5 pt-24">
      <div className="max-w-xl text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-gold">404</p>
        <h1 className="mt-4 font-display text-6xl uppercase">This room doesn’t exist.</h1>
        <p className="mt-4 text-cream-2">The page is gone — the floor is still open.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="gold-btn px-6 py-3">
            Home
          </Link>
          <Link href="/schedule" className="ghost-btn px-6 py-3">
            Class schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
