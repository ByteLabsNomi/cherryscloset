import type { PopupEvent } from "@/data/events";

interface EventCardProps {
  event: PopupEvent;
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      id={`event-${event.date}`}
      className="border-b border-warm-gray pb-8 mb-8 last:border-b-0"
    >
      <p className="text-xs tracking-[0.2em] text-cherry-red font-medium mb-2">
        {formatDate(event.date)}
      </p>
      <p className="text-xs tracking-[0.15em] text-light-gray mb-3 uppercase">
        {event.time} &mdash; {event.location}, {event.neighborhood}
      </p>
      <p className="text-sm leading-relaxed text-near-black/80 uppercase">
        {event.description}
      </p>
    </div>
  );
}
