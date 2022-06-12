module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      snow: "#cffafe",
      snow1: "#ecfeff",
      blue: "#17a1ff",
      green: "#49881c",
      green1: "#91cc04",
      grey: "#565656",
      grey1: "#546668",
    },
    extend: {
      height: {
        650: "650px",
      },
    },
  },
  plugins: [],
};
