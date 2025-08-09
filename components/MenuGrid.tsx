"use client";
import { MENU } from "@/lib/data";
import { motion } from "framer-motion";

export default function MenuGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {MENU.map((cat, i) => (
        <motion.section
          key={cat.title}
          className="card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-extrabold tracking-wider">{cat.title}</h3>
            <div className="chicago-star"></div>
          </header>
          <ul className="divide-y divide-white/10">
            {cat.items.map((it) => (
              <li key={it.name + it.price} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-semibold">{it.name}</div>
                  {(it.withFries || it.noFries) && (
                    <div className="text-xs text-white/50">
                      {it.withFries ? "With Fries" : it.noFries ? "No Fries" : ""}
                    </div>
                  )}
                </div>
                <div className="font-bold text-brand-red">{it.price}</div>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
