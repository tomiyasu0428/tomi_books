import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'narrator',
  title: 'ナレーター',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名前',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'プロフィール画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: '経歴・プロフィール',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'voiceCharacteristics',
      title: '声の特徴',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'specialties',
      title: '得意ジャンル',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '小説・文学', value: 'novel' },
          { title: 'ビジネス・自己啓発', value: 'business' },
          { title: '歴史・時代小説', value: 'history' },
          { title: 'ミステリー・サスペンス', value: 'mystery' },
          { title: 'SF・ファンタジー', value: 'scifi' },
          { title: 'ノンフィクション', value: 'nonfiction' },
          { title: '心理学・哲学', value: 'psychology' },
          { title: '科学・技術', value: 'science' },
        ],
      },
    }),
    defineField({
      name: 'website',
      title: 'ウェブサイト',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'voiceCharacteristics',
      media: 'image',
    },
  },
})