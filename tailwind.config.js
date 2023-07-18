// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                sans: ["Helvetica", "Arial", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#870f3b",
                    50: "#fff1f3",
                    100: "#ffe3e7",
                    200: "#ffccd5",
                    300: "#ffa1b3",
                    400: "#ff6d8b",
                    500: "#f93a65",
                    600: "#e71751",
                    700: "#c30d44",
                    800: "#a30e40",
                    900: "#870f3b",
                    950: "#4e031c",
                },

                secondaryColor: {
                    DEFAULT: "#7da43e",
                    50: "#f5f9ec",
                    100: "#e8f1d6",
                    200: "#d4e5b1",
                    300: "#b7d284",
                    400: "#9bbf5d",
                    500: "#7da43e",
                    600: "#60822e",
                    700: "#4b6427",
                    800: "#3d5024",
                    900: "#354522",
                    950: "#1a250e",
                },
                darkText: "#12130F",
                darkBG: "#1B1B1C",
                bg: "#FBFBF5",
                redColor: "#FE654F",
                greenColor: "#61E8E1",
                darkRed: "#444140",
            },
        },
    },
    plugins: [],
};
