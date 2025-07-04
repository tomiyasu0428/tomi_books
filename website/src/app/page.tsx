import Hero from '@/components/Hero';
import ReviewSection from '@/components/ReviewSection';
import CategorySection from '@/components/CategorySection';
import CommunitySection from '@/components/CommunitySection';
import { getLatestReviews } from '@/lib/sanity';

// Sanity から取得するデータ型（簡易）
type Review = Awaited<ReturnType<typeof getLatestReviews>>[number];

export default async function Home() {
  const reviews: Review[] = await getLatestReviews();

  return (
    <div className="fade-in">
      <Hero />
      <ReviewSection reviews={reviews} />
      <CategorySection />
      <CommunitySection />
    </div>
  );
}
