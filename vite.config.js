// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        arkiv: resolve(__dirname, "src/arkiv.html"),
        cookie: resolve(__dirname, "src/cookie.html"),
        detlevenderum: resolve(__dirname, "src/det-levende-rum.html"),
        eventsdramatik: resolve(__dirname, "src/events-dramatik.html"),
        eventsscenekunst: resolve(__dirname, "src/events-scenekunst.html"),
        eventstabu: resolve(__dirname, "src/events-tabu.html"),
        events: resolve(__dirname, "src/events.html"),
        frygtenforikkeatleve: resolve(
          __dirname,
          "src/frygten-for-ikke-at-leve.html"
        ),
        gogoyoyoku: resolve(__dirname, "src/go-go-yo-yoku.html"),
        mandliggersommandharredt: resolve(
          __dirname,
          "src/mand-ligger-som-mand-har-redt.html"
        ),
        om: resolve(__dirname, "src/om.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        privatliv: resolve(__dirname, "src/privatliv.html"),
        program: resolve(__dirname, "src/program.html"),
        rebirth: resolve(__dirname, "src/re-birth.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        vildmedmig: resolve(__dirname, "src/vild-med-mig.html"),
        whatfirestogetherwirestogether: resolve(
          __dirname,
          "src/what-fires-together-wires-together.html"
        ),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
