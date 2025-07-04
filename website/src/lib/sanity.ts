import { createClient } from 'next-sanity'
import { defineQuery } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o9qqw90y',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-07-11',
  useCdn: true,
})

// レビュー一覧取得クエリ
export const REVIEWS_QUERY = defineQuery(`
  *[_type == "review" && defined(slug.current)][0...12]{
    _id,
    title,
    slug,
    publishedAt,
    rating,
    "excerpt": array::join(string::split(pt::text(reviewBody), " ")[0...20], " "),
    book->{
      title,
      coverImage,
      author->{name, slug},
      narrator->{name, slug}
    },
    categories[]->{title, slug}
  }
`)

// 個別レビュー取得クエリ
export const REVIEW_QUERY = defineQuery(`
  *[_type == "review" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    rating,
    reviewBody,
    book->{
      title,
      coverImage,
      audibleUrl,
      publishedYear,
      isbn,
      author->{name, slug, bio, image},
      narrator->{name, slug, bio, image}
    },
    categories[]->{title, slug}
  }
`)

// 著者詳細クエリ
export const AUTHOR_QUERY = defineQuery(`
  *[_type == "author" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    bio,
    image,
    "books": *[_type == "book" && references(^._id)]{
      title,
      slug,
      coverImage,
      publishedYear
    }
  }
`)

// カテゴリー別レビューリストクエリ
export const CATEGORY_REVIEWS_QUERY = defineQuery(`
  *[_type == "review" && $categorySlug in categories[]->slug.current]{
    _id,
    title,
    slug,
    publishedAt,
    rating,
    book->{
      title,
      coverImage,
      author->{name, slug}
    }
  }
`)

// データ取得関数
export function getLatestReviews() {
  return client.fetch(REVIEWS_QUERY)
}

export function getReviewBySlug(slug: string) {
  return client.fetch(REVIEW_QUERY, { slug })
}

export function getAuthorBySlug(slug: string) {
  return client.fetch(AUTHOR_QUERY, { slug })
}

export function getReviewsByCategory(categorySlug: string) {
  return client.fetch(CATEGORY_REVIEWS_QUERY, { categorySlug })
}
