import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['"Open Sans"']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        formBgByLevel: {
          1: "#9DD4CF",
          2: "#E3E48D",
          3: "#A0DCFF",
          4: "#9DD4CF",
          5: "#E3E48D",
          6: "#A0DCFF",
          7: "#9DD4CF",
          8: "#E3E48D"
        },
      }
    },
  },
  plugins: [],
}
export default config
