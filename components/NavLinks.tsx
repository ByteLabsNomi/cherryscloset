"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/config";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {siteConfig.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-xs tracking-[0.2em] transition-colors hover:text-cherry-red ${
            pathname === item.href
              ? "text-cherry-red border-b border-cherry-red"
              : "text-near-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
