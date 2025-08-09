"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderButtons from "./OrderButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-red pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
        <motion.h1
          className="text-5xl md:text-7xl font-black leading-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chicago<span className="text-brand-red">-</span>Inspired{" "}
          <span className="gradient-text">Wingz</span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-white/70"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Crisp on the outside. Juicy inside. Served with that Windy City swagger.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/menu" className="btn">View Menu</Link>
          <OrderButtons/>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-3"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl h-20 md:h-32 shimmer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            />
          ))}
        </motion.div>
      </div>

      {/* Chicago Skyline Silhouette */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-40" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#111" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>
        <path fill="url(#g)" d="M0,170 L60,160 L80,100 L100,160 L130,140 L150,170 L210,150 L230,90 L250,140 L290,130 L310,150 L340,110 L360,160 L400,155 L420,70 L440,150 L500,140 L520,90 L540,160 L600,150 L620,130 L640,170 L700,150 L720,120 L740,170 L780,150 L800,80 L820,150 L860,140 L880,160 L920,110 L940,170 L980,150 L1000,90 L1020,160 L1060,150 L1100,170 L1200,170 L1200,200 L0,200 Z" />
        <rect x="0" y="170" width="1200" height="30" fill="#000"/>
      </svg>
    </section>
  );
}
