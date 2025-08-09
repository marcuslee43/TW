import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div>
            <div className="text-2xl font-black">
              Tez<span className="text-brand-red">-</span>Wingz
            </div>
            <p className="mt-2 text-white/60">Chicago-inspired wingz. Two OKC locations.</p>
          </div>
          <nav className="flex gap-6">
            <Link href="/menu" className="hover:text-brand-red">Menu</Link>
            <Link href="/locations" className="hover:text-brand-red">Locations</Link>
            <Link href="/join-the-team" className="hover:text-brand-red">Join the Team</Link>
            <Link href="/franchise" className="hover:text-brand-red">Franchise</Link>
          </nav>
        </div>
        <div className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Tez-Wingz. All rights reserved.</div>
      </div>
    </footer>
  );
}
