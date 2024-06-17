import { defineConfig } from 'astro/config';
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, PUBLIC_SANITY_STUDIO_PROJECT_ID } from './src/lib/config';

const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [sanityIntegration({
    projectId,
    dataset,
    apiVersion: "2021-03-25",
    useCdn: false,
    studioBasePath: '/admin',
    
  }), react()],
  adapter: netlify()
});