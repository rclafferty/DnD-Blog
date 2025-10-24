/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: '#f4e3c0',
        card: '#fff0d4',
        textPrimary: '#3e2723',
        textSecondary: '#6d4c41',
        header: '#b71c1c',
        accentGreen: '#2e7d32',
        accentBlue: '#1565c0',
        highlight: '#fdd835',
        link: '#c62828',
      },
      boxShadow: {
        parchment: '0 4px 15px rgba(0,0,0,0.2)',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
