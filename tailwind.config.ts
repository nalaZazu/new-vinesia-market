import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/herobanner.png')",
        // 'hero-mobile': "url('/src/assets/images/herobanner.png')",
      },
      backgroundColor: {},
      colors: {
        primary: "#2F222B",
        "primary-dark": "#61423D",
        secondary: "#BF4D20", 
        teritary: "#C2B7A2",
        critcstext: "#2F222B",
        critcscount: "#A6836C",
        critparacolor: "#594E55",
        bgred: "#7D302E",
        Primarybutton: "#BF4D20",
      },
    },
    fontFamily: { Canela: "Canela", albertsans: "Albert Sans", jost: "Jost" },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      const containerMax = {
        ".containerMax": {
          maxWidth: "1400px", // Set your desired max-width
          padding: "1rem", // Set your desired padding
          marginLeft: "auto",
          marginRight: "auto",
        },
      };

      addComponents(containerMax);
    },
  ],
};
export default config;
