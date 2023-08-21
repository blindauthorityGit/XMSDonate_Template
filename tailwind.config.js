// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1536px",
            "2xl": "1990px",
            "3xl": "2600px", // Add a custom breakpoint for 2880px
        },
        container: {
            screens: {
                sm: "100%",
                md: "640px",
                lg: "840px",
                xl: "1240px",
                "2xl": "1800px",
                "3xl": "2560px", // Adjust container width for 2880px
            },
        },
        extend: {
            fontFamily: {
                ...fontFamily,
                sans: ["Helvetica", "Arial", "sans-serif"],
                success: ["Lobster", "cursive"],
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
    variants: {
        extend: {
            height: ["responsive"],
            width: ["responsive"],
        },
    },
    plugins: [],
};
