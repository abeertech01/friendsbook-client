/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
      colors: {
        "light-gray": "#EFF2F5",
        "plain-gray": "rgb(107 114 128)",
        "pinkish-red": "#ee0979",
        orange: "#ff6a00",
        blue: "#00b8d8",
        cyan: "#00dbc1",
      },
    },
  },
  plugins: [],
}
