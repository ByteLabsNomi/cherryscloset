"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/config";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [navTop, setNavTop] = useState(0);

  // Measure where the nav bar starts so overlay opens below announcement bar
  useEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setNavTop(rect.top + window.scrollY);
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div ref={navRef}>
      {/* Hamburger / X button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-10 h-10"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`absolute left-2 w-6 h-[1.5px] bg-near-black transition-all duration-300 ${
            isOpen ? "top-[19px] rotate-45" : "top-[13px]"
          }`}
        />
        <span
          className={`absolute left-2 w-6 h-[1.5px] bg-near-black transition-all duration-300 ${
            isOpen ? "opacity-0" : "top-[19px]"
          }`}
        />
        <span
          className={`absolute left-2 w-6 h-[1.5px] bg-near-black transition-all duration-300 ${
            isOpen ? "top-[19px] -rotate-45" : "top-[25px]"
          }`}
        />
      </button>

      {/* Overlay — starts below announcement bar */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: `${navTop}px` }}
      >
        <div className="flex flex-col items-center gap-8">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-2xl tracking-[0.2em] uppercase transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                pathname === item.href
                  ? "text-cherry-red"
                  : "text-near-black hover:text-cherry-red"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 75}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`mt-4 flex items-center gap-5 transition-all duration-300 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${siteConfig.nav.length * 75}ms`
                : "0ms",
            }}
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-near-black hover:text-cherry-red transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-near-black hover:text-cherry-red transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
