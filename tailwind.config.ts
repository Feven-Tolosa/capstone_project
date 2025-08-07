import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4f46e5',
          700: '#4338ca',
        },
        wood: {
          100: '#f5e8d8',
          400: '#d2a679',
          800: '#5e3a1e',
        },
      },
      backgroundImage: {
        'wood-pattern': "url('/wood-texture.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
export default config
