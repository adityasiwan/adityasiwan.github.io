/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#FAE9F3",
                secondary: "#A73B75",
                tertiary: "#fcb4de",
                quadinary: "#1F6825",
                "black-100": "#4A261F",
                "black-200": "#090325",
                "white-100": "#FFF8FC",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
                // "tall": "min-height: 880px",
                // "med": "min-height: 750px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
};