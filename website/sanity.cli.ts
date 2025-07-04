import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o9qqw90y',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
})
