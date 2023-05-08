/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        "1": "1"
      },
      boxShadow: {
        "dark": "4px 3px 4px #21232b",
        "light": "4px 3px 4px #d6d3d3"
      },
      borderColor: {
        "dark": "rgba(33, 34, 36, 1)"
      },
    },
    screens: {
      "phone": "0px",
      "phone2": "640px",
      "tablet": "768px",
      "laptop": "1024px",
      "desktop": "1280px"
    }
  },
  plugins: []
}

