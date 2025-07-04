import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: '著者',
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
      name: 'birthYear',
      title: '生年',
      type: 'number',
      validation: (Rule) => Rule.min(1800).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'nationality',
      title: '国籍',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'ウェブサイト',
      type: 'url',
    }),
    defineField({
      name: 'awards',
      title: '受賞歴',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})