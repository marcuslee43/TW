"use client";
import { useState } from "react";

export default function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black tracking-wide">Franchise with Us</h1>
        <p className="text-white/70">Bring the Tez-Wingz flavor to your city. Share a few details and we’ll reach out with next steps.</p>
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
          <label className="text-sm text-white/70">City/State of Interest</label>
          <input className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="e.g., Tulsa, OK" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Capital Available (optional)</label>
          <input className="rounded-xl bg-black/60 border border-white/15 px-3 py-2" placeholder="$" />
        </div>
        <button className="btn btn-primary">Submit</button>
        {submitted && <p className="text-brand-red font-semibold">Thanks! We’ll be in touch.</p>}
      </form>
    </section>
  );
}
