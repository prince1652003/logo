module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_00: "#ffffff00", A700: "#ffffff" },
        blue_gray: { 100: "#cbd5e1", 300: "#94a3b8", 700: "#475569" },
        black: { "900_11": "#00000011", A700_01: "#000000" },
        blue: { A700: "#2563eb" },
        indigo: { 50: "#e2e8f0" },
        amber: { 600: "#eab308" },
        gray: { 100: "#f1f5f9", 900: "#0f172a" },
        red: { 500: "#ef4444" },
        black_600: "#656d76",
        gray_shadow: "#00000029",
      },
      boxShadow: { xs: "0 0 4px 0 #00000011", sm: "0 0 13px 5px #00000029" },
      fontFamily: { roboto: "Roboto", opensans: "Open Sans" },
      backgroundImage: { gradient: "linear-gradient(180deg, #f1f5f9,#ffffff00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
