import Link from "next/link";
import { LoginForm } from "@/components/forms";
import { PageHero, Section } from "@/components/ui";

export const metadata = { title: "Member Login" };

export default function LoginPage() {
  return (
    <>
      <PageHero
        kicker="Member Portal"
        title="Secure login."
        body="Manage billing, home club, and class bookings. This demo uses local member data — no real authentication server."
        image="/images/gym-floor.jpg"
      />
      <Section>
        <div className="mx-auto grid max-w-xl gap-6">
          <LoginForm />
          <p className="text-center text-sm text-muted">
            New here?{" "}
            <Link href="/join" className="text-gold">
              Join Now
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
