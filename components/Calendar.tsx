"use client";

import { useState, useMemo } from "react";

const DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const MONTHS = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

interface CalendarProps {
  eventDates: Set<string>;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

function toDateString(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function Calendar({
  eventDates,
  selectedDate,
  onDateSelect,
}: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const { daysInMonth, startDay } = useMemo(() => {
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();
    const start = new Date(currentYear, currentMonth, 1).getDay();
    return { daysInMonth: days, startDay: start };
  }, [currentMonth, currentYear]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const blanks = Array.from({ length: startDay }, (_, i) => (
    <div key={`blank-${i}`} className="aspect-square" />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateStr = toDateString(currentYear, currentMonth, day);
    const hasEvent = eventDates.has(dateStr);
    const isSelected = selectedDate === dateStr;

    return (
      <button
        key={dateStr}
        onClick={() => hasEvent && onDateSelect(dateStr)}
        disabled={!hasEvent}
        className={`aspect-square min-h-[44px] flex items-center justify-center text-sm relative transition-colors ${
          hasEvent
            ? isSelected
              ? "text-white font-semibold"
              : "text-cherry-red font-semibold hover:bg-cherry-red/10 cursor-pointer"
            : "text-light-gray cursor-default"
        }`}
      >
        {hasEvent && isSelected && (
          <span className="absolute inset-1 bg-cherry-red rounded-full" />
        )}
        {hasEvent && !isSelected && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cherry-red rounded-full" />
        )}
        <span className="relative z-10">{day}</span>
      </button>
    );
  });

  return (
    <div className="select-none">
      {/* Month header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:text-cherry-red transition-colors"
          aria-label="PREVIOUS MONTH"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h3 className="text-sm tracking-[0.2em] font-medium">
          {MONTHS[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:text-cherry-red transition-colors"
          aria-label="NEXT MONTH"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] tracking-[0.15em] text-light-gray font-medium"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7">
        {blanks}
        {days}
      </div>
    </div>
  );
}
