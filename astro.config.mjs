import { defineConfig } from 'astro/config';
import sanity from "astro-sanity"
import { DATASET, PROJECT_ID } from './src/lib/config';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: PROJECT_ID,
            dataset: DATASET,
            apiVersion: "2021-03-25",
            useCdn: true
        })
    ],
});
