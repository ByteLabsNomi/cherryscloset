import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "THE STORY BEHIND CHERRY'S CLOSET — A CURATED VINTAGE POPUP IN LOS ANGELES.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[80rem] mx-auto px-6 py-16 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-light tracking-[0.15em] mb-12">
          OUR STORY
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-near-black/80 uppercase">
          <p>
            CHERRY&apos;S CLOSET STARTED WITH A SUITCASE AND A DREAM. WHAT
            BEGAN AS SELLING VINTAGE FINDS OUT OF A SILVER LAKE APARTMENT HAS
            GROWN INTO ONE OF LA&apos;S MOST ANTICIPATED POPUP SHOPPING
            EXPERIENCES. WE BELIEVE THAT THE BEST FASHION HAS ALREADY BEEN MADE
            — IT JUST NEEDS TO FIND ITS NEXT OWNER.
          </p>
          <p>
            EVERY PIECE IN OUR COLLECTION IS HAND-SELECTED FROM ESTATE SALES,
            PRIVATE COLLECTIONS, AND VINTAGE DEALERS ACROSS CALIFORNIA AND
            BEYOND. WE LOOK FOR QUALITY, CHARACTER, AND THAT CERTAIN SOMETHING
            THAT MAKES A GARMENT WORTH HOLDING ONTO FOR ANOTHER LIFETIME. FROM
            90S CHANEL TO 70S LEVI&apos;S, IF IT&apos;S IN OUR CLOSET, IT&apos;S
            THERE FOR A REASON.
          </p>
          <p>
            OUR POPUPS ARE MORE THAN SHOPPING — THEY&apos;RE COMMUNITY. GOOD
            MUSIC, COLD DRINKS, AND A ROOM FULL OF PEOPLE WHO APPRECIATE THE
            CRAFT AND HISTORY BEHIND WHAT THEY WEAR. WE KEEP IT INTIMATE, WE
            KEEP IT REAL, AND WE KEEP IT IN LA.
          </p>
        </div>

        {/* Photo placeholder */}
        <div className="mt-16 bg-warm-gray/40 aspect-[3/2] flex items-center justify-center">
          <p className="text-xs tracking-[0.2em] text-light-gray uppercase">
            PHOTO COMING SOON
          </p>
        </div>
      </div>
    </div>
  );
}
