/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        "mindes-ink": "#101418",
        "mindes-slate": "#1d242b",
        "mindes-soft": "#f5f6f7",
        "mindes-muted": "#6c7a89",
        "mindes-line": "#e3e7ea",
        "mindes-accent": "#0f2b46"
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(16, 20, 24, 0.08)"
      }
    }
  },
  plugins: []
};
