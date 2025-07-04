import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: '本',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
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
      name: 'coverImage',
      title: '書影',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: '著者',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'narrator',
      title: 'ナレーター',
      type: 'reference',
      to: { type: 'narrator' },
    }),
    defineField({
      name: 'publisher',
      title: '出版社',
      type: 'string',
    }),
    defineField({
      name: 'publishedYear',
      title: '出版年',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
    }),
    defineField({
      name: 'audibleUrl',
      title: 'Audible URL',
      type: 'url',
    }),
    defineField({
      name: 'duration',
      title: '再生時間（分）',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'あらすじ',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'genres',
      title: 'ジャンル',
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
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, author, media } = selection
      return {
        title: title,
        subtitle: `著者: ${author || '未設定'}`,
        media: media,
      }
    },
  },
})