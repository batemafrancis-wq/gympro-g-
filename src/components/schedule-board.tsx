"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  classTypes,
  dayNames,
  dayShort,
  formatTime,
  getClass,
  getTrainer,
  locations,
  schedule,
  type LocationId,
} from "@/lib/data";
import { readBookings, readMember, writeBookings, type Booking } from "@/lib/auth";
import { useClubLocation } from "@/components/providers";

function startOfWeek(date: Date) {
  const copy = new Date(date);
  const day = copy.getDay();
  copy.setDate(copy.getDate() - day);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function ScheduleBoard() {
  const { locationId } = useClubLocation();
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));
  const [club, setClub] = useState<LocationId | "all">(locationId);
  const [format, setFormat] = useState("all");
  const [notice, setNotice] = useState("");

  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)), [weekStart]);

  const slots = schedule.filter((slot) => {
    const matchClub = club === "all" || slot.locationId === club;
    const matchFormat = format === "all" || slot.classId === format;
    return matchClub && matchFormat;
  });

  function book(slotId: string, date: Date) {
    const member = readMember();
    if (!member) {
      setNotice("Sign in to the member portal to book.");
      return;
    }
    const slot = schedule.find((item) => item.id === slotId);
    if (!slot) return;
    const classItem = getClass(slot.classId);
    const trainer = getTrainer(slot.trainerId);
    const clubItem = locations.find((item) => item.id === slot.locationId);
    const booking: Booking = {
      id: `${slotId}-${date.toISOString().slice(0, 10)}`,
      slotId,
      className: classItem?.name ?? "Class",
      trainer: trainer?.name ?? "Coach",
      location: clubItem?.shortName ?? "",
      date: date.toDateString(),
      time: formatTime(slot.time),
    };
    const existing = readBookings();
    if (existing.some((item) => item.id === booking.id)) {
      setNotice("You’re already booked on that session.");
      return;
    }
    writeBookings([...existing, booking]);
    setNotice(`Booked ${booking.className} · ${booking.date}`);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border border-line bg-ink-2 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button type="button" className="ghost-btn px-3 py-2" onClick={() => setWeekStart(addDays(weekStart, -7))}>
            Prev
          </button>
          <p className="text-sm text-cream-2">
            {days[0].toLocaleDateString(undefined, { month: "short", day: "numeric" })} –{" "}
            {days[6].toLocaleDateString(undefined, { month: "short", day: "numeric" })}
          </p>
          <button type="button" className="ghost-btn px-3 py-2" onClick={() => setWeekStart(addDays(weekStart, 7))}>
            Next
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={club}
            onChange={(e) => setClub(e.target.value as LocationId | "all")}
            className="border border-line bg-ink px-3 py-2 text-sm"
          >
            <option value="all">All clubs</option>
            {locations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.shortName}
              </option>
            ))}
          </select>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="border border-line bg-ink px-3 py-2 text-sm"
          >
            <option value="all">All formats</option>
            {classTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {notice ? (
        <p className="mt-4 border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-2">
          {notice}{" "}
          {notice.includes("Sign in") ? (
            <Link href="/login" className="underline">
              Open portal
            </Link>
          ) : (
            <Link href="/portal/bookings" className="underline">
              View bookings
            </Link>
          )}
        </p>
      ) : null}

      <div className="mt-6 grid gap-4 lg:grid-cols-7">
        {days.map((date) => {
          const daySlots = slots
            .filter((slot) => slot.day === date.getDay())
            .sort((a, b) => a.time.localeCompare(b.time));
          return (
            <div key={date.toISOString()} className="border border-line bg-ink-2">
              <div className="border-b border-line px-3 py-3">
                <p className="text-[11px] tracking-[0.18em] uppercase text-gold">{dayShort[date.getDay()]}</p>
                <p className="font-display text-2xl">{date.getDate()}</p>
                <p className="text-[11px] text-muted">{dayNames[date.getDay()]}</p>
              </div>
              <div className="space-y-3 p-3">
                {daySlots.length === 0 ? (
                  <p className="text-xs text-muted">No sessions</p>
                ) : (
                  daySlots.map((slot) => {
                    const classItem = getClass(slot.classId);
                    const trainer = getTrainer(slot.trainerId);
                    const clubItem = locations.find((item) => item.id === slot.locationId);
                    const full = slot.taken >= slot.spots;
                    return (
                      <article key={slot.id} className="border border-line bg-ink p-3">
                        <p className="text-[11px] text-gold">{formatTime(slot.time)}</p>
                        <h3 className="mt-1 font-display text-lg uppercase leading-tight">{classItem?.name}</h3>
                        <p className="mt-1 text-xs text-muted">
                          {trainer?.name} · {clubItem?.shortName}
                        </p>
                        <p className="mt-2 text-[11px] uppercase tracking-wider text-cream-2">
                          {full ? "Waitlist" : `${slot.spots - slot.taken} spots`}
                        </p>
                        <button
                          type="button"
                          disabled={full}
                          onClick={() => book(slot.id, date)}
                          className={`mt-3 w-full py-2 text-[10px] tracking-[0.16em] uppercase ${
                            full ? "border border-line text-muted" : "gold-btn"
                          }`}
                        >
                          {full ? "Full" : "Book"}
                        </button>
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
