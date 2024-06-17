import { defineConfig } from 'astro/config';
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET
} = loadEnv(process.env.NODE_ENV, process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [sanityIntegration({
    projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
    dataset: PUBLIC_SANITY_STUDIO_DATASET,
    apiVersion: "2021-03-25",
    useCdn: false,
    studioBasePath: '/admin'
  }), react(), tailwind()],
  adapter: netlify()
});