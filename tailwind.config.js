/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg1": "hsl(0, 0%, 96%)",
        "bg3": "hsl(0, 0%, 87%)",
      },
      
    },
  },
  plugins: [],
}
