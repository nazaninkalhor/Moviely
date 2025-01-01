import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '440px',

      'md': '768px',

      'lg': '1024px',
      'custom': { 'min': '1142px' },
      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {},
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
} satisfies Config;
