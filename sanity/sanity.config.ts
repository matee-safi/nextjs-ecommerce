import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import product from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'practical-ecommerce',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_API_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [product],
  },
})
