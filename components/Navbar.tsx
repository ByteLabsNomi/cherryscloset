import { siteConfig } from "@/data/config";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import InstagramIcon from "./InstagramIcon";

export default function Navbar() {
  return (
    <nav className="border-b border-warm-gray">
      <div className="max-w-[80rem] mx-auto px-6 h-16 hidden md:flex items-center">
        {/* Nav links centered */}
        <div className="flex-1 flex items-center justify-evenly">
          <NavLinks />
        </div>

        {/* Instagram pinned right */}
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-near-black hover:text-cherry-red transition-colors ml-8"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-end h-14 px-6">
        <MobileMenu />
      </div>
    </nav>
  );
}
