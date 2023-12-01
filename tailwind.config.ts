import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/herobanner.png')",
        // 'hero-mobile': "url('/src/assets/images/herobanner.png')",
      },
      backgroundColor:{

      },
      colors:{
        critcstext:"#2F222B",
        critcscount:"#A6836C",
        critparacolor: "#594E55",
        bgred: "#7D302E",
        Primarybutton:"#BF4D20",
      }
    },
  },
  plugins: [],
}
export default config
