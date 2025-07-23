import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "RunnelReactCarousel",
      fileName: "runnel-react-carousel",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
