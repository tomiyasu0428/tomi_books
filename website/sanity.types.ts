// 型定義ファイル（将来的にSanity TypeGenで自動生成される）

export interface Author {
  _id: string
  _type: 'author'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name: string
  slug: { current: string; _type: 'slug' }
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  bio?: string
  birthYear?: number
  nationality?: string
  website?: string
  awards?: string[]
}

export interface Narrator {
  _id: string
  _type: 'narrator'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name: string
  slug: { current: string; _type: 'slug' }
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  bio?: string
  voiceCharacteristics?: string
  specialties?: string[]
  website?: string
}

export interface Book {
  _id: string
  _type: 'book'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: { current: string; _type: 'slug' }
  coverImage?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  author: Author
  narrator?: Narrator
  publisher?: string
  publishedYear?: number
  isbn?: string
  audibleUrl?: string
  duration?: number
  description?: string
  genres?: string[]
}

export interface Category {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: { current: string; _type: 'slug' }
  description?: string
  color?: 'brown' | 'orange' | 'green' | 'blue' | 'purple' | 'red'
  icon?: string
}

export interface Review {
  _id: string
  _type: 'review'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: { current: string; _type: 'slug' }
  book: Book
  rating: 1 | 2 | 3 | 4 | 5
  listeningRating?: 1 | 2 | 3 | 4 | 5
  storyRating?: 1 | 2 | 3 | 4 | 5
  reviewBody: any[] // Block content
  goodPoints?: string[]
  concernPoints?: string[]
  recommendedFor?: string[]
  categories?: Category[]
  tags?: string[]
  featured?: boolean
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
}