/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        cream: "#f5f5f0",
        accent: {
          DEFAULT: "#6C5CE7",
          soft: "#8b7eef",
          deep: "#4a3dc4",
        },
        muted: "#8a8a93",
        line: "rgba(245,245,240,0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(108,92,231,0.45)",
        soft: "0 10px 40px -20px rgba(0,0,0,0.6)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(108,92,231,0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(108,92,231,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        logoBreathe: {
          "0%, 100%": {
            transform: "scale(1)",
            filter:
              "drop-shadow(0 0 6px rgba(108,92,231,0.30)) drop-shadow(0 0 14px rgba(108,92,231,0.10))",
          },
          "50%": {
            transform: "scale(1.04)",
            filter:
              "drop-shadow(0 0 16px rgba(108,92,231,0.70)) drop-shadow(0 0 32px rgba(108,92,231,0.40))",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        pulseGlow: "pulseGlow 2.4s ease-out infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        logoBreathe: "logoBreathe 5s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(108,92,231,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
