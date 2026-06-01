import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: refined steel azure
        primary: {
          50: '#ecf3fb',
          100: '#cfe0f4',
          200: '#a9c7ea',
          300: '#79a6dc',
          400: '#5189ce',
          500: '#3a72bc',
          600: '#2d5ea0',
          700: '#244c82',
          800: '#1e3e69',
          900: '#182f4f',
        },
        // Dark: deep cool "ink" navy / slate neutrals
        dark: {
          50: '#e8edf2',
          100: '#c4cdd8',
          200: '#8593a3',
          300: '#5a6878',
          400: '#2a3645',
          500: '#18222f',
          600: '#111a26',
          700: '#0c141e',
          800: '#080e16',
          900: '#05090f',
        },
        // Accent: muted amber / gold (the third color)
        accent: {
          50: '#fbf3e2',
          100: '#f3ddae',
          200: '#e9c277',
          300: '#dca94a',
          400: '#ce9a3a',
          500: '#b9842b',
          600: '#996b20',
          700: '#79541a',
          800: '#5b3f15',
          900: '#3e2b0e',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
