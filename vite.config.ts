import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/a11y/" : "./",
  build: {
    outDir: "docs",
    chunkSizeWarningLimit: 1024, // kB
  },
  plugins: [tailwindcss()],
});
