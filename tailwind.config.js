/** @type {import('tailwindcss').Config} */
// "Sunny meadow": parchment cream, grass green, sky blue and warm sunlight — the calm of the first game.
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        cream: { 50: "#fffdf6", 100: "#fbf6e8", 200: "#f3ead2", 300: "#e8d9b3" },
        moss: { 400: "#7fb356", 500: "#5f9a3c", 600: "#4a7d2e", 700: "#375d23", 800: "#2e3a24", 900: "#1e2718" },
        sky: { 200: "#cfe9ff", 300: "#a9d8ff", 400: "#6cbcf7", 500: "#3a9be6" },
        sun: { 300: "#ffe08a", 400: "#ffcb52", 500: "#f2a93b" },
        bark: { 500: "#8a5a34", 600: "#6e4527" },
      },
      fontFamily: {
        display: ['"Marko One"', "Georgia", "serif"],
        sans: ['"Nunito"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "76rem" },
      boxShadow: {
        soft: "0 24px 50px -28px rgba(46,58,36,0.45)",
        sun: "0 14px 34px -12px rgba(242,169,59,0.75)",
      },
      keyframes: {
        sway: { "0%,100%": { transform: "rotate(-2deg)" }, "50%": { transform: "rotate(2deg)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        drift: { "0%": { transform: "translateX(-4%)" }, "100%": { transform: "translateX(4%)" } },
        firefly: { "0%,100%": { opacity: "0", transform: "translate(0,0)" }, "50%": { opacity: "1", transform: "translate(12px,-18px)" } },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        bob: "bob 5s ease-in-out infinite",
        drift: "drift 30s ease-in-out infinite alternate",
        firefly: "firefly 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
