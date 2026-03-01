/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'cheonan-green': '#4CAF50',
                'cheonan-dark-green': '#388E3C',
                'cheonan-sky': '#81D4FA',
                'cheonan-yellow': '#FFF59D',
            },
            fontFamily: {
                'jua': ['Jua', 'sans-serif']
            }
        }
    },
    plugins: [],
}
