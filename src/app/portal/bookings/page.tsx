import { BookingsPortal } from "../portal-client";

export const metadata = { title: "Class Booking Manager" };

export default function BookingsPage() {
  return (
    <div className="pt-24">
      <BookingsPortal />
    </div>
  );
}
