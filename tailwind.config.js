/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        200: "200px",
        250: "250px",
        295: "295px",
        400: "400px",
        500: "500px",
        850: "850px",
        900: "900px",
      },
      height: {
        390: "390px",
        450: "450px",
      },
      minWidth: {
        200: "200px",
        280: "280px",
      },
      maxWidth: {
        200: "200px",
        280: "280px",
        300: "300px",
        350: "350px",
      },
      screens: {
        xm: "500px",
        xxm: "200px",
      },
    },
  },
  plugins: [],
};
