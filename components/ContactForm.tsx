"use client";

import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "PLEASE ENTER YOUR NAME";
    if (!form.email.trim()) errs.email = "PLEASE ENTER YOUR EMAIL";
    else if (!emailRegex.test(form.email)) errs.email = "PLEASE ENTER A VALID EMAIL";
    if (!form.message.trim()) errs.message = "PLEASE ENTER A MESSAGE";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: connect to backend
    setSubmitted(true);
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
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
    <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-lg">
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          NAME
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            clearError("name");
          }}
          className={`w-full bg-transparent border-b py-2 text-sm focus:outline-none transition-colors uppercase ${
            errors.name ? "border-cherry-red" : "border-warm-gray focus:border-near-black"
          }`}
        />
        {errors.name && (
          <p className="text-[10px] tracking-[0.1em] text-cherry-red mt-1.5 uppercase">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          EMAIL
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
            clearError("email");
          }}
          className={`w-full bg-transparent border-b py-2 text-sm focus:outline-none transition-colors ${
            errors.email ? "border-cherry-red" : "border-warm-gray focus:border-near-black"
          }`}
        />
        {errors.email && (
          <p className="text-[10px] tracking-[0.1em] text-cherry-red mt-1.5 uppercase">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-xs tracking-[0.15em] text-light-gray mb-2 uppercase">
          MESSAGE
        </label>
        <textarea
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            clearError("message");
            const el = e.target;
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
          }}
          rows={1}
          className={`w-full bg-transparent border-b py-2 text-sm focus:outline-none transition-colors resize-none uppercase overflow-hidden ${
            errors.message ? "border-cherry-red" : "border-warm-gray focus:border-near-black"
          }`}
        />
        {errors.message && (
          <p className="text-[10px] tracking-[0.1em] text-cherry-red mt-1.5 uppercase">{errors.message}</p>
        )}
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
