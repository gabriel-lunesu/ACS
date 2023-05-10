/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['25px', '28px'],
        xl: ['24px', '32px'],
    },},
  },
  plugins: [require("daisyui")],
}




