import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 min-h-[100dvh] md:min-h-0 -mt-24 md:mt-0">
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={600}
        height={600}
        className="mb-8 w-[65vw] sm:w-[45vw] max-w-[600px]"
        priority
      />
      <p className="text-sm sm:text-base md:text-lg tracking-[0.3em] text-light-gray mb-14 sm:mb-10 text-center uppercase">
        CURATED VINTAGE
      </p>
      <Link
        href="/events"
        className="border border-near-black text-near-black text-sm sm:text-base tracking-[0.2em] uppercase px-10 py-4 hover:bg-near-black hover:text-cream transition-colors"
      >
        SEE UPCOMING EVENTS
      </Link>
    </div>
  );
}
