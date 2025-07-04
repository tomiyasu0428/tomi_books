import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'book-tomi',
  title: '耳で旅する本屋さん',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o9qqv90y',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('コンテンツ')
          .items([
            S.listItem()
              .title('レビュー')
              .child(
                S.documentTypeList('review')
                  .title('レビュー')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.divider(),
            S.listItem()
              .title('本')
              .child(
                S.documentTypeList('book')
                  .title('本')
                  .defaultOrdering([{ field: 'title', direction: 'asc' }])
              ),
            S.listItem()
              .title('著者')
              .child(
                S.documentTypeList('author')
                  .title('著者')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),
            S.listItem()
              .title('ナレーター')
              .child(
                S.documentTypeList('narrator')
                  .title('ナレーター')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('カテゴリー')
              .child(
                S.documentTypeList('category')
                  .title('カテゴリー')
                  .defaultOrdering([{ field: 'title', direction: 'asc' }])
              ),
          ])
    }),
    visionTool({
      defaultApiVersion: '2024-07-11',
      defaultDataset: 'production',
    }),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  // APIバージョン
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o9qqv90y',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-07-11',
  },
})