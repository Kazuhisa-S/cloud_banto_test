/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orangered: "#ff5e18",
        black: "#000",
        silver: "rgba(195, 195, 195, 0.2)",
        gainsboro: "#d4dae5",
        lightslategray: "#7e8594",
        gray: {
          100: "#0c1528",
          200: "#111",
        },
        whitesmoke: {
          100: "#f9f9f9",
          200: "#f0f0f0",
        },
        crimson: "#ff1a51",
        lavenderblush: "#ffeff3",
        royalblue: "#0e6dfc",
        mediumseagreen: "#06b56b",
        deepskyblue: "#0eb4fc",
        aliceblue: "#f0f3f8",
      },
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        roboto: "Roboto",
        "inria-sans": "'Inria Sans'",
        "noto-sans-jp": "'Noto Sans JP'",
      },
      borderRadius: {
        "21xl": "40px",
        "11xl": "30px",
        "17xl": "36px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      "27xl": "46px",
      "2xs": "11px",
      "3xs": "10px",
      "23xl": "42px",
      lg: "18px",
      "13xl": "32px",
      "3xl": "22px",
      smi: "13px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
