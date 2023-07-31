// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1028px",
            xl: "1536px",
            "2xl": "1640px",
        },
        container: {
            sm: "100%",
            md: "960px",
            lg: "1024px",
            xl: "1440px",
            "2xl": "calc((100vw - 1680px) / 2)",
        },
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
                greenColor: {
                    DEFAULT: "#00a651",
                    50: "#edfff5",
                    100: "#d6ffea",
                    200: "#afffd5",
                    300: "#71ffb6",
                    400: "#2dfb90",
                    500: "#02e570",
                    600: "#00bf59",
                    700: "#00a651",
                    800: "#06753d",
                    900: "#085f34",
                    950: "#00361b",
                },
                darkText: "#12130F",
                darkBG: "#1B1B1C",
                bg: "#FBFBF5",
                redColor: "#FE654F",
                darkRed: "#444140",
            },
        },
    },
    plugins: [],
};
