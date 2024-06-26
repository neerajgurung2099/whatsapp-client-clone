/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackpearl: "rgb(32,44,51)",
        oxfordblue: "rgb(42,57,66)",
        tangaroa: "rgb(17,27,37)",
        mosque: "rgb(0,92,75)",
      },
      backgroundImage: {
        "chat-background": "url('/src/assets/chat-background.png')",
      },
    },
  },
  plugins: [],
};
