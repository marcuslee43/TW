import MenuGrid from "@/components/MenuGrid";

export const metadata = {
  title: "Menu — Tez-Wingz",
};

export default function MenuPage() {
  return (
    <section className="py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black tracking-wide">Menu</h1>
        <p className="text-white/70">All prices in USD. Subject to change.</p>
      </header>
      <MenuGrid />
    </section>
  )
}
