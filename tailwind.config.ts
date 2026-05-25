import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#050508",
          surface: "#0c0c14",
          elevated: "#111120",
          overlay: "#16162a",
          border: "#1e1e38",
          "border-bright": "#2a2a50",
        },
        accent: {
          cyan: "#00d4ff",
          purple: "#a855f7",
          blue: "#3b82f6",
          green: "#10d4a0",
          amber: "#f59e0b",
          pink: "#ec4899",
        },
        text: {
          primary: "#f0f0ff",
          secondary: "#8888aa",
          muted: "#44445a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-1":
          "radial-gradient(at 40% 20%, hsla(228,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.05) 0px, transparent 50%)",
        "mesh-2":
          "radial-gradient(at 100% 0%, hsla(289,100%,74%,0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(180,100%,56%,0.10) 0px, transparent 50%)",
        "mesh-3":
          "radial-gradient(at 50% 0%, hsla(160,100%,56%,0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(228,100%,74%,0.08) 0px, transparent 50%)",
        "mesh-4":
          "radial-gradient(at 0% 0%, hsla(38,100%,74%,0.12) 0px, transparent 50%), radial-gradient(at 100% 50%, hsla(355,100%,74%,0.08) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.15), 0 0 60px rgba(0, 212, 255, 0.05)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.15), 0 0 60px rgba(168, 85, 247, 0.05)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.15), 0 0 60px rgba(59, 130, 246, 0.05)",
        "glow-green": "0 0 20px rgba(16, 212, 160, 0.15), 0 0 60px rgba(16, 212, 160, 0.05)",
        "card": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset",
        "card-hover": "0 8px 40px rgba(0,0,0,0.4), 0 1px 0 0 rgba(255,255,255,0.08) inset",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
