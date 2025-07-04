import Link from 'next/link';
import { Card } from '@/components/ui/Card';

// 仮の型定義。後で生成された型に置き換える
type Review = {
  _id: string;
  title: string;
  slug: { current: string };
  rating: number;
  publishedAt: string;
  book: {
    title: string;
    author: { name: string };
    narrator: { name: string };
  };
  categories: { title: string }[];
};

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // Sanityのデータ（ネスト）とモックデータ（フラット）の差異を吸収
  const bookTitle = review.book?.title || review.title;
  const authorName = review.book?.author?.name || review.author?.name;
  const narratorName = review.book?.narrator?.name || review.narrator?.name;
  const categories = review.categories || (review.category ? [review.category] : []);

  return (
    <Card as="article" className="p-6 hover-lift">
      <Link href={`/reviews/${review.slug.current}`} className="block">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-noto-serif">
          {review.title}
        </h3>
        <div className="mb-3">
          <p className="text-sm text-gray-600 font-medium">{bookTitle}</p>
          <p className="text-xs text-gray-500">
            著: {authorName} / 読: {narratorName}
          </p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-accent-500 text-sm font-medium">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </span>
          <time className="text-xs text-gray-500">
            {new Date(review.publishedAt).toLocaleDateString('ja-JP')}
          </time>
        </div>
        <div className="flex flex-wrap gap-1">
          {categories.slice(0, 2).map((category, index) => (
            <span
              key={index}
              className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
            >
              {category.title}
            </span>
          ))}
        </div>
      </Link>
    </Card>
  );
}
