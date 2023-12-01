/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./index.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto : ["Roboto"],
        inter: ["Inter"],
        raleway: ["Raleway"]
      }
    },
  },
  plugins: [],
}

