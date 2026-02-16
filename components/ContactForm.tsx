"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm tracking-[0.15em] uppercase">
          THANK YOU FOR YOUR MESSAGE.
        </p>
        <p className="text-xs tracking-[0.15em] text-light-gray mt-2 uppercase">
          WE&apos;LL GET BACK TO YOU SOON.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          NAME
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full bg-transparent border-b border-warm-gray py-2 text-sm focus:outline-none focus:border-near-black transition-colors uppercase"
        />
      </div>
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          EMAIL
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full bg-transparent border-b border-warm-gray py-2 text-sm focus:outline-none focus:border-near-black transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          MESSAGE
        </label>
        <textarea
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            // Auto-expand
            const el = e.target;
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
          }}
          required
          rows={1}
          className="w-full bg-transparent border-b border-warm-gray py-2 text-sm focus:outline-none focus:border-near-black transition-colors resize-none uppercase overflow-hidden"
        />
      </div>
      <button
        type="submit"
        className="bg-cherry-red text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-cherry-red-hover transition-colors"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
