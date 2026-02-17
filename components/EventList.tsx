"use client";

import { useState, useMemo } from "react";
import { events } from "@/data/events";
import Calendar from "./Calendar";
import EventCard from "./EventCard";

export default function EventList() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventDates = useMemo(
    () => new Set(events.map((e) => e.date)),
    []
  );

  const filteredEvents = useMemo(
    () =>
      selectedDate
        ? events.filter((e) => e.date === selectedDate)
        : events,
    [selectedDate]
  );

  const handleDateSelect = (date: string) => {
    setSelectedDate(date === selectedDate ? null : date);
    // Scroll to event after state update
    setTimeout(() => {
      const el = document.getElementById(`event-${date}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
      {/* Left column: header + calendar */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-light tracking-[0.15em] mb-2">
          UPCOMING EVENTS
        </h1>
        <p className="text-light-gray text-xs tracking-[0.15em] mb-10 uppercase">
          LOS ANGELES POPUP SCHEDULE
        </p>

        <Calendar
          eventDates={eventDates}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        {selectedDate && (
          <button
            onClick={() => setSelectedDate(null)}
            className="mt-6 text-xs tracking-[0.15em] text-light-gray hover:text-cherry-red transition-colors uppercase"
          >
            CLEAR FILTER
          </button>
        )}
      </div>

      {/* Right column: events */}
      <div>
        <p className="text-xs tracking-[0.15em] text-light-gray mb-10 uppercase">
          SELECT A DATE ON THE CALENDAR TO FILTER, OR BROWSE ALL UPCOMING EVENTS
          BELOW.
        </p>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.date} event={event} />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-sm tracking-[0.15em] text-light-gray uppercase">
              NEW EVENTS COMING SOON.
            </p>
            <p className="text-sm tracking-[0.15em] text-light-gray mt-2 uppercase">
              FOLLOW US ON{" "}
              <a
                href="https://www.instagram.com/cherrysclosetla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry-red hover:text-cherry-red-hover transition-colors"
              >
                INSTAGRAM
              </a>
              {" & "}
              <a
                href="https://www.tiktok.com/@cherrysclosetla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry-red hover:text-cherry-red-hover transition-colors"
              >
                TIKTOK
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
