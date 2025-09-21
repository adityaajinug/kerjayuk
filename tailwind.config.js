/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            webstyle: {
                "primary": "#f82d16",
                "grey": "#a0a0a0"
            }
        },
        boxShadow: {
            'top': '0 -2px 8px rgba(0, 0, 0, 0.1)',
            'top-md': '0 -4px 12px rgba(0, 0, 0, 0.15)',
        }
    },
  },
  plugins: [],
}
