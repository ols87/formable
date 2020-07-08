import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/index.html"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: "formable",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "http://localhost:3333",
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("postcss-nested"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purgecss, require("cssnano")]
          : []),
      ],
    }),
  ],
};
