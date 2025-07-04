import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'カテゴリー',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'カテゴリー名',
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
      name: 'description',
      title: '説明',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'カテゴリーカラー',
      type: 'string',
      options: {
        list: [
          { title: 'ブラウン（デフォルト）', value: 'brown' },
          { title: 'オレンジ', value: 'orange' },
          { title: 'グリーン', value: 'green' },
          { title: 'ブルー', value: 'blue' },
          { title: 'パープル', value: 'purple' },
          { title: 'レッド', value: 'red' },
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'アイコン',
      type: 'string',
      description: 'アイコン名（Phosphor Icons）',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})