import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {markdownSchema} from 'sanity-plugin-markdown'
import { schemaTypes } from './src/lib/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'mll-backend',

  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,

  plugins: [structureTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
