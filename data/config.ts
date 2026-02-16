export const siteConfig = {
  name: "Cherry's Closet",
  tagline: "CURATED VINTAGE",
  announcement: {
    text: "NEXT POPUP: MARCH 15 IN SILVER LAKE",
    link: "/events",
  } as { text: string; link: string } | null,
  emails: {
    general: "hello@cherryscloset.com",
    events: "events@cherryscloset.com",
    press: "press@cherryscloset.com",
  },
  social: {
    instagram: "https://instagram.com/cherryscloset",
  },
  nav: [
    { label: "HOME", href: "/" },
    { label: "EVENTS", href: "/events" },
    { label: "ABOUT", href: "/about" },
    // { label: "SHOP", href: "/shop" },
    { label: "CONTACT", href: "/contact" },
  ],
};
