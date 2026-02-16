import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 min-h-[100dvh] md:min-h-0 -mt-24 md:mt-0">
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={280}
        height={280}
        className="mb-8"
        priority
      />
      <p className="text-xs sm:text-sm tracking-[0.3em] text-light-gray mb-14 sm:mb-10 text-center uppercase">
        CURATED VINTAGE
      </p>
      <Link
        href="/events"
        className="border border-near-black text-near-black text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-near-black hover:text-cream transition-colors"
      >
        SEE UPCOMING EVENTS
      </Link>
    </div>
  );
}
