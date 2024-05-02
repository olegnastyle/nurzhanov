/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            gridTemplateRows: {
               'layout': 'auto 1fr auto',
            },
          },
    },
    plugins: [],
}