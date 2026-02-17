"use client";

import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("PLEASE ENTER YOUR EMAIL");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("PLEASE ENTER A VALID EMAIL");
      return;
    }
    setError("");
    // TODO: connect to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-xs tracking-[0.15em] uppercase text-near-black">
        THANKS FOR SUBSCRIBING!
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="YOUR EMAIL"
          className={`bg-transparent border-b text-xs tracking-[0.1em] px-1 py-1.5 w-48 placeholder:text-light-gray focus:outline-none transition-colors ${
            error ? "border-cherry-red" : "border-warm-gray focus:border-near-black"
          }`}
        />
        <button
          type="submit"
          className="text-xs tracking-[0.15em] uppercase text-near-black hover:text-cherry-red transition-colors font-medium"
        >
          SUBSCRIBE
        </button>
      </form>
      {error && (
        <p className="text-[10px] tracking-[0.1em] text-cherry-red mt-1.5 uppercase">
          {error}
        </p>
      )}
    </div>
  );
}
