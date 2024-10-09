import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Barlow Semi Condensed"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        "scissor-from": "hsl(var(--scissor-from))",
        "scissor-to": "hsl(var(--scissor-to))",
        "paper-from": "hsl(var(--paper-from))",
        "paper-to": "hsl(var(--paper-to))",
        "rock-from": "hsl(var(--rock-from))",
        "rock-to": "hsl(var(--rock-to))",
        dark: "hsl(var(--dark))",
        grey: "hsl(var(--grey))",
        outline: "hsl(var(--outline))",
        "radial-from": "hsl(var(--radial-from))",
        "radial-to": "hsl(var(--radial-to))",
      },
      boxShadow: {
        "inner-xl": "inset 0 5px 2px 0 rgb(0 0 0 / 0.25);",
      },
    },
  },
  plugins: [],
} satisfies Config;
