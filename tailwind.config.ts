import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
