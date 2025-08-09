"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X, ChevronDown, ShoppingCart } from "lucide-react";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/join-the-team", label: "Join the Team" },
  { href: "/franchise", label: "Franchise" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto max-w-6xl mt-3 rounded-3xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black text-white shadow-glow">
              TW
            </span>
            <span className="text-xl font-extrabold tracking-wide">Tez<span className="text-brand-red">-</span>Wingz</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-red transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setOrderOpen((v) => !v)}
                className="btn btn-primary flex items-center gap-2"
                aria-expanded={orderOpen}
              >
                <ShoppingCart size={18}/> Order Online <ChevronDown size={16} />
              </button>
              {orderOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl glass p-2">
                  <Link href="https://www.toasttab.com/tez-wingz/v3" className="block px-3 py-2 rounded-xl hover:bg-white/10">Midwest City</Link>
                  <Link href="https://www.toasttab.com/tez-wingz-n-may-12314-north-may-avenue" className="block px-3 py-2 rounded-xl hover:bg-white/10">North OKC</Link>
                </div>
              )}
            </div>
          </nav>

          <button className="md:hidden btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={18}/> : <MenuIcon size={18}/>}
          </button>
        </div>

        {open && (
          <nav className="mt-3 grid gap-2 md:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-2 hover:bg-white/10">
                {l.label}
              </Link>
            ))}
            <div className="grid gap-2">
              <Link href="https://www.toasttab.com/tez-wingz/v3" className="btn btn-primary">Order Midwest City</Link>
              <Link href="https://www.toasttab.com/tez-wingz-n-may-12314-north-may-avenue" className="btn btn-primary">Order North OKC</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
