import Hero from '@/components/Hero';
import ReviewSection from '@/components/ReviewSection';
// import CategorySection from '@/components/CategorySection';
// import CommunitySection from '@/components/CommunitySection';

// モックデータ（一時的）
const mockReviews = [
  {
    _id: "1",
    title: "人は話し方が9割",
    author: { name: "永松茂久" },
    narrator: { name: "けんぞう" },
    rating: 4.5,
    description: "話し方で人生が変わる。実践的なコミュニケーション術を学べる一冊。",
    slug: { current: "hito-wa-hanashikata-ga-9wari" },
    category: { title: "ビジネス・キャリア", slug: { current: "business" } },
    publishedAt: "2024-01-15"
  },
  {
    _id: "2", 
    title: "鬼滅の刃",
    author: { name: "吾峠呼世晴" },
    narrator: { name: "花江夏樹" },
    rating: 4.8,
    description: "大正時代を舞台にした、心温まる兄妹の絆の物語。",
    slug: { current: "kimetsu-no-yaiba" },
    category: { title: "小説・文学", slug: { current: "fiction" } },
    publishedAt: "2024-01-10"
  }
];

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <ReviewSection reviews={mockReviews} />
    </div>
  );
}
