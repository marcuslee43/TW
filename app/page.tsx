import Hero from "@/components/Hero";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mt-24">
        <header className="mb-6">
          <h2 className="text-3xl font-black tracking-wide">Locations</h2>
          <p className="text-white/70">Find your nearest Tez-Wingz.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div key={loc.key} className="card">
              <h3 className="text-2xl font-extrabold">{loc.name}</h3>
              <p className="mt-2 text-white/70">{loc.address}<br/>{loc.cityStateZip}</p>
              <div className="mt-4 flex gap-3">
                <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Order Online
                </a>
                <Link href={`/locations`} className="btn">More Info</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <header className="mb-6">
          <h2 className="text-3xl font-black tracking-wide">Menu Highlights</h2>
          <p className="text-white/70">Classic wingz, boneless, catfish, shrimp, and more.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "WINGZ", desc: "Bone-in, Chicago-style crisp.", href: "/menu" },
            { title: "BONE-LESS", desc: "No bones. All flavor.", href: "/menu" },
            { title: "CATFISH & SHRIMP", desc: "Southern staples. Chicago swagger.", href: "/menu" },
          ].map((card) => (
            <a key={card.title} href={card.href} className="card hover:shadow-glow transition-shadow">
              <div className="chicago-star"></div>
              <div className="mt-2">
                <h3 className="text-2xl font-extrabold">{card.title}</h3>
                <p className="mt-2 text-white/70">{card.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/menu" className="btn">See Full Menu</Link>
        </div>
      </section>
    </>
  );
}
