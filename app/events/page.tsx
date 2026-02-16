import type { Metadata } from "next";
import EventList from "@/components/EventList";

export const metadata: Metadata = {
  title: "EVENTS",
  description:
    "UPCOMING CHERRY'S CLOSET VINTAGE POPUP EVENTS IN LOS ANGELES. BROWSE DATES, LOCATIONS, AND DETAILS.",
};

export default function EventsPage() {
  return (
    <div className="max-w-[80rem] mx-auto px-6 py-16 sm:py-24">
      <EventList />

      {/* FAQ */}
      <section className="mt-24 border-t border-warm-gray pt-16 max-w-2xl">
        <h2 className="text-lg tracking-[0.2em] font-light mb-10">
          FAQ
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold mb-2">
              WHAT IS CHERRY&apos;S CLOSET?
            </p>
            <p className="text-sm leading-relaxed text-near-black/80 uppercase">
              A CURATED VINTAGE POPUP FEATURING HAND-PICKED DESIGNER PIECES FROM
              THE 70S THROUGH THE 2000S. EVERY ITEM IS AUTHENTICATED AND
              SELECTED FOR QUALITY AND STYLE.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] font-semibold mb-2">
              WHERE ARE YOUR POPUPS?
            </p>
            <p className="text-sm leading-relaxed text-near-black/80 uppercase">
              WE HOST EVENTS ACROSS LOS ANGELES — SILVER LAKE, FAIRFAX, VENICE,
              AND MORE. LOCATIONS CHANGE EACH EVENT. CHECK THE CALENDAR ABOVE
              FOR DETAILS.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] font-semibold mb-2">
              WHEN DO NEW EVENTS GET ANNOUNCED?
            </p>
            <p className="text-sm leading-relaxed text-near-black/80 uppercase">
              WE ANNOUNCE NEW DATES ON INSTAGRAM FIRST, THEN UPDATE THIS PAGE.
              SIGN UP FOR OUR NEWSLETTER TO NEVER MISS A DROP.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] font-semibold mb-2">
              DO I NEED TO PAY TO ENTER?
            </p>
            <p className="text-sm leading-relaxed text-near-black/80 uppercase">
              NEVER. ALL CHERRY&apos;S CLOSET POPUPS ARE FREE AND OPEN TO THE
              PUBLIC. JUST SHOW UP AND SHOP.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
