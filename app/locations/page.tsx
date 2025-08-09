import { LOCATIONS } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Locations — Tez-Wingz",
};

export default function LocationsPage() {
  return (
    <section className="py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black tracking-wide">Locations</h1>
        <p className="text-white/70">Order online or visit us in-person.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {LOCATIONS.map((loc) => (
          <div key={loc.key} className="card">
            <h3 className="text-2xl font-extrabold">{loc.name}</h3>
            <p className="mt-2 text-white/70">{loc.address}<br/>{loc.cityStateZip}</p>
            <div className="mt-4 flex gap-3">
              <Link href={loc.orderUrl} className="btn btn-primary">Order Online</Link>
              <Link href={`https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}`} className="btn">Open in Maps</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
