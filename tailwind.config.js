/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: "#2d728f",
        headerButtonsSelected: "#3b8ea5",
        webPageBodyBackground: "rgb(254 243 199)",
        webPageContainerBody: "rgb(253 230 138)",
      },
    },
  },
  plugins: [],
};
