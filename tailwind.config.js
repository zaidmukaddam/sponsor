module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: '400px',
            sm: '550px',
            md: '750px',
            lg: '950px',
        },
        extend: {
            fontFamily: {
                default: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
