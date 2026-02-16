export interface PopupEvent {
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  neighborhood: string;
  description: string;
}

export const events: PopupEvent[] = [
  {
    date: "2026-03-15",
    time: "11:00 AM – 5:00 PM",
    location: "2847 Sunset Blvd",
    neighborhood: "Silver Lake",
    description:
      "Spring kickoff popup featuring 80s and 90s designer pieces. Early birds get first pick of our freshest haul — Chanel, Versace, Thierry Mugler, and more.",
  },
  {
    date: "2026-03-29",
    time: "12:00 PM – 6:00 PM",
    location: "714 N Fairfax Ave",
    neighborhood: "Fairfax",
    description:
      "Our biggest drop yet. Over 200 hand-picked vintage pieces from estate sales across California. Accessories, outerwear, and rare denim.",
  },
  {
    date: "2026-04-12",
    time: "11:00 AM – 4:00 PM",
    location: "1520 Abbot Kinney Blvd",
    neighborhood: "Venice",
    description:
      "A curated edit of warm-weather vintage — linen sets, silk blouses, and statement sunglasses. DJ set and iced matcha on us.",
  },
];
