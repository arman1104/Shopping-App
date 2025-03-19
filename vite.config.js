import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Shopping-App/", // for github
  base: process.env.VERCEL ? "/" : "/Shopping-App/", // 👈 Fix for Vercel & GitHub Pages
});
