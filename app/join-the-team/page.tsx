"use client";
import { useState } from "react";

export const metadata = {
  title: "Join the Team — Tez-Wingz",
};

export default function JoinTheTeamPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black tracking-wide">Join the Team</h1>
        <p className="text-white/70">We’re always looking for friendly faces with hustle. Submit your info and we’ll reach out.</p>
      </header>
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="card grid gap-4"
      >
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Full Name</label>
          <input required className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Email</label>
          <input type="email" required className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Phone</label>
          <input required className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="(555) 555-5555" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Preferred Location</label>
          <select className="rounded-xl bg-black/60 border border-white/15 px-3 py-2">
            <option>Midwest City</option>
            <option>North OKC</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Tell us about yourself</label>
          <textarea rows={4} className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="Experience, schedule, etc." />
        </div>
        <button className="btn btn-primary">Submit</button>
        {submitted && <p className="text-brand-red font-semibold">Thanks! We’ll be in touch.</p>}
      </form>
    </section>
  );
}
