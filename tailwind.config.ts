import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px", //min-width 480px
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      spacing: {
        2.25: "9px",
        3.75: "15px",
        4.5: "18px",
        5.75: "23px",
        7.25: "29px",
        7.75: "31px",
        9.5: "38px",
        11.5: "46px",
        12.75: "51px",
        13: "52px",
        14.75: "59px",
        15: "60px",
        17.5: "70px",
        18.5: "74px",
        19.25: "77px",
        20.5: "82px",
        21.25: "85px",
        25.5: "98px",
        28.5: "114px",
        29: "116px",
        31.75: "127px",
        35: "140px",
        36.5: "146px",
        39: "156px",
        43: "172px",
        45: "180px",
        46.25: "185px",
        47.5: "190px",
        55: "220px",
        57.5: "230px",
        61: "244px",
        65: "260px",
        71.5: "287px",
        75: "300px",
        121.5: "486px",
        131.5: "526px",
        177.25: "709px",
        181.5: "726px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "linear-grad-blue-10": "linear-gradient(to top, #5E66D6, #4956BA, #777FFA)",
        "linear-grad-yellow-10": "linear-gradient(126deg, #f5a623, #f76b1c)",
        "linear-grad-blue-20" : "linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)",
        "new-banner-image-gradient": "linear-gradient(180deg, rgba(11, 11, 46, 0) 20.31%, rgba(11, 11, 46, .6) 61.46%, #0b0b2e)"
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        transparent: "transparent",
        current: "currentColor",
        white: {
          10: "#FFFFFF",
          20: "#E0E0E0",
          30: "#BDBDBD",
        },
        green: {
          10: "#70FF00",
        },
        black: {
          10: "#4F4F4F",
          20: "#333333",
          30: "#2D2D2D",
          40: "#222222",
          50: "#161616",
          60: "#000000",
          70:"#717171",
        },
        grey: {
          10: "#808080",
          20: "#C5C5C5",
          30: "#C9C9C9",
          40: "#48484880",
          50: "#F9F9F9"
        },
        purple: {
          10: "#FF4500",
        },
        blue:{
          "10": "#646EDF",
          "20":"#0c5397"
        },
        cream:{
          10: "rgb(246 225 193 / 1)" ,
          20: "rgb(245,192,106)"
        },
        brown:{
          10: "#372300",
          20: "#372300CC"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      variants: {
        width: ["responsive", "hover", "focus", "group-hover"],
        display: ["responsive", "hover", "focus", "group-hover"],
        transform: ["responsive", "hover", "focus", "group-hover"],
        scale: ["responsive", "hover", "focus", "group-hover"],
        extend: {
          animation: ["hover", "focus", "group-hover"],
          grayscale: ["hover", "focus", "group-hover"],
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;