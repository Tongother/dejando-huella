import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        rancho: ["Rancho"],
        coda: ["Coda"],
        com: ["Comfortaa"],
        nun: ["Nunito Sans"],
        ramm: ["Rammetto One"],
        irish: ["Irish Grover"],
        inria: ["Inria Serif"],
        itim: ["Itim"],
        ruby: ["Rubik"],
        luckiest: ["Luckiest Guy"],

      },
      backgroundImage: {
        'adopciones': "url('/fondoAdopcion.png')",
      },
    },
  },
  plugins: [],
};
export default config;
