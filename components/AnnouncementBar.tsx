import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function AnnouncementBar() {
  if (!siteConfig.announcement) return null;

  return (
    <div className="bg-cherry-red text-white text-center py-2.5 px-4">
      <Link
        href={siteConfig.announcement.link}
        className="text-xs tracking-[0.15em] uppercase hover:underline"
      >
        {siteConfig.announcement.text}
      </Link>
    </div>
  );
}
