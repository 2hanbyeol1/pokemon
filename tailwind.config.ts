import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        pixel:
          "-3px 0 0 0 #434b4f, 3px 0 0 0 #434b4f, 0 -3px 0 0 #434b4f, 0 3px 0 0 #434b4f",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, 1px) rotate(1deg)" },
          "20%": { transform: "translate(-2px, 1px) rotate(-1deg)" },
          "30%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(-1px, 1px) rotate(1deg)" },
          "50%": { transform: "translate(1px, -1px) rotate(-2deg)" },
          "60%": { transform: "translate(2px, 1px) rotate(1deg)" },
          "70%": { transform: "translate(-1px, 2px) rotate(2deg)" },
          "80%": { transform: "translate(2px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(-1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(2px, 1px) rotate(-1deg)" },
        },
        jump: {
          "0%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1);",
          },
          "50%": {
            transform: "translateY(10px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out infinite",
        shake1: "shake 1s ease-in-out",
        jump: "jump 0.4s infinite;",
        appear: "appear 0.01s linear",
      },
    },
  },
  plugins: [],
};
export default config;
