/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // หรือใช้ "media" ถ้าต้องการให้ตรวจจับอัตโนมัติ
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{navy: "#000"}
    },
  },
  plugins: [],
};
