"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-xs tracking-[0.15em] uppercase text-near-black">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="YOUR EMAIL"
        required
        className="bg-transparent border-b border-warm-gray text-xs tracking-[0.1em] px-1 py-1.5 w-48 placeholder:text-light-gray focus:outline-none focus:border-near-black transition-colors"
      />
      <button
        type="submit"
        className="text-xs tracking-[0.15em] uppercase text-near-black hover:text-cherry-red transition-colors font-medium"
      >
        Subscribe
      </button>
    </form>
  );
}
