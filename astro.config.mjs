import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  build: { format: "file" },
  site: "https://jackestes06.github.io",
  base: "/WebDev/",
});
