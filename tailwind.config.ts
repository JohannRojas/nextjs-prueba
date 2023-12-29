import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8D442',
        secondary: '#FEAF00',
        grayscale: {
          100: '#E5E5E5',
          200: '#CDCDCD',
          300: '#6C6C6C'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
