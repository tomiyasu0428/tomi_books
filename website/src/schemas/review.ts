import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'レビュー',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'レビュータイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'book',
      title: '対象の本',
      type: 'reference',
      to: { type: 'book' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: '総合評価（5段階）',
      type: 'number',
      options: {
        list: [
          { title: '★☆☆☆☆ (1)', value: 1 },
          { title: '★★☆☆☆ (2)', value: 2 },
          { title: '★★★☆☆ (3)', value: 3 },
          { title: '★★★★☆ (4)', value: 4 },
          { title: '★★★★★ (5)', value: 5 },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'listeningRating',
      title: '聴きやすさ（5段階）',
      type: 'number',
      options: {
        list: [
          { title: '★☆☆☆☆ (1)', value: 1 },
          { title: '★★☆☆☆ (2)', value: 2 },
          { title: '★★★☆☆ (3)', value: 3 },
          { title: '★★★★☆ (4)', value: 4 },
          { title: '★★★★★ (5)', value: 5 },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'storyRating',
      title: 'ストーリー（5段階）',
      type: 'number',
      options: {
        list: [
          { title: '★☆☆☆☆ (1)', value: 1 },
          { title: '★★☆☆☆ (2)', value: 2 },
          { title: '★★★☆☆ (3)', value: 3 },
          { title: '★★★★☆ (4)', value: 4 },
          { title: '★★★★★ (5)', value: 5 },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reviewBody',
      title: 'レビュー本文',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'goodPoints',
      title: '良かった点',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'concernPoints',
      title: '気になった点',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'recommendedFor',
      title: 'こんな人におすすめ',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'categories',
      title: 'カテゴリー',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: '注目レビュー',
      type: 'boolean',
      description: 'トップページで特集表示するかどうか',
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEOタイトル',
      type: 'string',
      description: 'ページタイトル用（空の場合はレビュータイトルを使用）',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO説明文',
      type: 'text',
      rows: 3,
      description: 'メタディスクリプション（150文字以内推奨）',
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      bookTitle: 'book.title',
      media: 'book.coverImage',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, bookTitle, media, rating } = selection
      const stars = '★'.repeat(rating || 0) + '☆'.repeat(5 - (rating || 0))
      return {
        title: title,
        subtitle: `${bookTitle || '未設定'} - ${stars}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: '公開日（新しい順）',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: '公開日（古い順）',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: '評価順（高い順）',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
})