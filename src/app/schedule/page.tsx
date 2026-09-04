import Link from "next/link";
import { ScheduleBoard } from "@/components/schedule-board";
import { PageHero, Section } from "@/components/ui";

export const metadata = { title: "Class Schedule" };

export default function SchedulePage() {
  return (
    <>
      <PageHero
        kicker="Class Schedule"
        title="The week, in three clubs."
        body="Filter by location and format. Members book seven days out. Demo portal: member@lapogym.com / lapo2026."
        image="/images/boxing-class.jpg"
        actions={<Link href="/login" className="ghost-btn px-6 py-3">Member login</Link>}
      />
      <Section>
        <ScheduleBoard />
      </Section>
    </>
  );
}
