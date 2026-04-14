import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // Ajustamos las rutas de los assets para que coincidan con tu carpeta /public/img/
      includeAssets: [
        "favicon.svg",
        "img/hero.png", 
        "img/react.svg", 
        "img/vite.svg",
        "img/andres.png",
        "img/laura.png",
        "img/camila.png",
        "img/escritorio.png",
        "img/Negocio.png",
        "img/telegono.png",
        "robots.txt"
      ],
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg,xml,webmanifest}"],
      },
      manifest: {
        name: "Mi PWA",
        short_name: "PWA",
        description: "Aplicación web progresiva creada para buscar un mejor control para tus gastos de tu vida pesada",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        screenshots: [
          {
            src: "img/img-192x192.png", // Quitamos el / inicial para mejor compatibilidad con rutas relativas
            sizes: "360x360", 
            type: "image/png",
            form_factor: "narrow",
            label: "Vista Móvil"
          },
          {
            src: "img/img-192x192.png",
            sizes: "360x360",
            type: "image/png",
            form_factor: "wide",
            label: "Vista Escritorio"
          } 
        ],
        icons: [
          {
            src: "img/manifest-512x512.png",
            sizes: "512x512", 
            type: "image/png",
            purpose: "any"
          },
          {
            src: "img/manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable" 
          },
        ],
      },
    }),
  ],
});