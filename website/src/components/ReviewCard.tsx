import Link from 'next/link'
import Image from 'next/image'
import { Review } from '../../sanity.types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // 星評価の表示
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <article className="bg-white rounded-xl shadow-card hover:shadow-card-hover hover-lift transition-all duration-200 overflow-hidden">
      <Link href={`/reviews/${review.slug.current}`} className="block">
        {/* 書影 */}
        <div className="aspect-[3/4] relative bg-gray-100">
          {review.book.coverImage ? (
            <Image
              src={review.book.coverImage.asset._ref} // TODO: Sanity image URL変換が必要
              alt={`${review.book.title}の書影`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
          )}
        </div>

        {/* コンテンツ */}
        <div className="p-4">
          {/* レビュータイトル */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 font-noto-serif">
            {review.title}
          </h3>

          {/* 書籍情報 */}
          <div className="mb-3">
            <p className="text-sm text-gray-600 font-medium">{review.book.title}</p>
            <p className="text-xs text-gray-500">
              著: {review.book.author.name}
              {review.book.narrator && ` / 読: ${review.book.narrator.name}`}
            </p>
          </div>

          {/* 評価 */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-accent-500 text-sm font-medium mr-1">
                {renderStars(review.rating)}
              </span>
              <span className="text-xs text-gray-500">({review.rating}/5)</span>
            </div>
            <time className="text-xs text-gray-500">
              {new Date(review.publishedAt).toLocaleDateString('ja-JP')}
            </time>
          </div>

          {/* カテゴリータグ */}
          {review.categories && review.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {review.categories.slice(0, 2).map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                >
                  {category.title}
                </span>
              ))}
              {review.categories.length > 2 && (
                <span className="text-xs text-gray-500">+{review.categories.length - 2}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}