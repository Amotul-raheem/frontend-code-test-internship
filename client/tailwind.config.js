/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens:{
                'sm': '640px',
                'md': '768px',
                'lg': '1025px',
            },
            colors:{
                hemocyanin: "var(--hemocyanin)",
                ice: "var(--ice)",
                plum: "var(--plum)",
                purpleHaze: "var(--purpleHaze)",
                siphon: "var(--siphon)",
                sohoLights: "var(--sohoLights)",
            },
            fontFamily: {
                sans: "var(--font-sans)",
            }
        },
    },
    plugins: [],
}