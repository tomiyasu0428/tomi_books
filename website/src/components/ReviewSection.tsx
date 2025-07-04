import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';

// 仮の型定義
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

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-noto-serif">
            最新のレビュー
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            店主ブックとみが厳選した、話題のオーディオブック作品をご紹介
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center bg-primary-800 hover:bg-primary-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            すべてのレビューを見る
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
