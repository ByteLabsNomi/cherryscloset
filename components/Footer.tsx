import Link from "next/link";
import { siteConfig } from "@/data/config";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t border-warm-gray">
      <div className="max-w-[80rem] mx-auto px-6 py-12">
        {/* Newsletter row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <p className="text-xs tracking-[0.15em] uppercase text-light-gray">
            STAY IN THE LOOP
          </p>
          <NewsletterSignup />
        </div>

        <div className="border-t border-warm-gray mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.15em] uppercase text-light-gray hover:text-cherry-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-cherry-red transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-cherry-red transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs tracking-[0.1em] text-light-gray">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
