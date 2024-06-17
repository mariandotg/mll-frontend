import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, PUBLIC_SANITY_STUDIO_PROJECT_ID } from './src/lib/config';

// const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
// const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

export default defineConfig({
  name: 'default',
  title: 'mll-backend',

  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Titulo',
            type: 'string',
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
        ],
      }
    ],
  },
})
