import { siteConfig } from "@/data/config";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";

export default function Navbar() {
  return (
    <nav className="border-b border-warm-gray">
      <div className="max-w-[80rem] mx-auto px-6 h-16 hidden md:flex items-center">
        {/* Nav links centered */}
        <div className="flex-1 flex items-center justify-evenly">
          <NavLinks />
        </div>

        {/* Social icons pinned right */}
        <div className="flex items-center gap-4 ml-8">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-near-black hover:text-cherry-red transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-near-black hover:text-cherry-red transition-colors"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-end h-14 px-6">
        <MobileMenu />
      </div>
    </nav>
  );
}
