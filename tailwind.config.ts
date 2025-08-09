import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF0000",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 0, 0, 0.55)",
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
        'radial-red': "radial-gradient(600px circle at 50% 0%, rgba(255,0,0,0.15), transparent 40%)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
