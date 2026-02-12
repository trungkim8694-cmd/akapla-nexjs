import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Đề phòng nếu bạn còn file trong src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
