import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import ContactForm from "@/components/ContactForm";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata: Metadata = {
  title: "CONTACT",
  description:
    "GET IN TOUCH WITH CHERRY'S CLOSET. GENERAL INQUIRIES, EVENT COLLABORATIONS, AND PRESS.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[80rem] mx-auto px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.15em] mb-12">
            GET IN TOUCH
          </h1>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold mb-1">
                GENERAL INQUIRIES
              </p>
              <a
                href={`mailto:${siteConfig.emails.general}`}
                className="text-sm text-near-black/80 hover:text-cherry-red transition-colors uppercase"
              >
                {siteConfig.emails.general.toUpperCase()}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold mb-1">
                EVENTS &amp; COLLABORATIONS
              </p>
              <a
                href={`mailto:${siteConfig.emails.events}`}
                className="text-sm text-near-black/80 hover:text-cherry-red transition-colors uppercase"
              >
                {siteConfig.emails.events.toUpperCase()}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold mb-1">
                PRESS
              </p>
              <a
                href={`mailto:${siteConfig.emails.press}`}
                className="text-sm text-near-black/80 hover:text-cherry-red transition-colors uppercase"
              >
                {siteConfig.emails.press.toUpperCase()}
              </a>
            </div>
          </div>

          <div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-near-black hover:text-cherry-red transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="text-xs tracking-[0.15em] uppercase">
                FOLLOW US ON INSTAGRAM
              </span>
            </a>
          </div>
        </div>

        {/* Right column: form */}
        <div>
          <h2 className="text-lg tracking-[0.2em] font-light mb-8">
            SEND A MESSAGE
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
