import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: resolve(__dirname, "src/data"),
      compositions: resolve(__dirname, "src/ui/compositions"),
      hooks: resolve(__dirname, "src/ui/hooks"),
      icons: resolve(__dirname, "src/ui/icons"),
      images: resolve(__dirname, "src/ui/images"),
      layout: resolve(__dirname, "src/ui/layout"),
      primitives: resolve(__dirname, "src/ui/primitives"),
      utils: resolve(__dirname, "src/ui/utils"),
      types: resolve(__dirname, "src/types"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/ui/index.ts"),
      name: "SDS",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-aria-components",
      ],
      output: {
        assetFileNames: () => {
          return "index.css";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "JSXRuntime",
          "react-aria-components": "ReactAriaComponents",
        },
        manualChunks: {
          icons: ["src/ui/icons/index.ts"],
          primitives: ["src/ui/primitives/index.ts"],
          compositions: ["src/ui/compositions/index.ts"],
          layout: ["src/ui/layout/index.ts"],
        },
      },
    },
    sourcemap: true,
    // Ensure CSS is included in the bundle
    cssCodeSplit: false,
    copyPublicDir: false,
  },
});
