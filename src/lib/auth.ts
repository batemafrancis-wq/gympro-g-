import { demoMember, type LocationId } from "@/lib/data";

export const MEMBER_KEY = "lapo-member";
export const BOOKINGS_KEY = "lapo-bookings";

export type MemberSession = {
  name: string;
  email: string;
  plan: string;
  planId: string;
  locationId: LocationId;
  memberSince: string;
  nextBill: string;
  amount: number;
  status: string;
};

export type Booking = {
  id: string;
  slotId: string;
  className: string;
  trainer: string;
  location: string;
  date: string;
  time: string;
};

export function readMember(): MemberSession | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(MEMBER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MemberSession;
  } catch {
    return null;
  }
}

export function writeMember(member: MemberSession) {
  window.localStorage.setItem(MEMBER_KEY, JSON.stringify(member));
}

export function clearMember() {
  window.localStorage.removeItem(MEMBER_KEY);
}

export function readBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(BOOKINGS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Booking[];
  } catch {
    return [];
  }
}

export function writeBookings(bookings: Booking[]) {
  window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

export function authenticate(email: string, password: string): MemberSession | null {
  if (email.trim().toLowerCase() === demoMember.email && password === demoMember.password) {
    return {
      name: demoMember.name,
      email: demoMember.email,
      plan: demoMember.plan,
      planId: demoMember.planId,
      locationId: demoMember.locationId,
      memberSince: demoMember.memberSince,
      nextBill: demoMember.nextBill,
      amount: demoMember.amount,
      status: demoMember.status,
    };
  }
  return null;
}
