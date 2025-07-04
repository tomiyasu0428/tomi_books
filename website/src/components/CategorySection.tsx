import CategoryCard from '@/components/CategoryCard';

// 仮の型定義
type Category = {
  name: string;
  icon: string;
  count: number;
};

const mockCategories: Category[] = [
  { name: '小説・文学', icon: '📚', count: 12 },
  { name: 'ビジネス', icon: '💼', count: 8 },
  { name: 'ミステリー', icon: '🔍', count: 6 },
  { name: 'SF・ファンタジー', icon: '🚀', count: 4 },
  { name: 'ノンフィクション', icon: '📖', count: 7 },
  { name: '自己啓発', icon: '💡', count: 9 },
  { name: '歴史', icon: '🏛️', count: 5 },
  { name: '心理学', icon: '🧠', count: 3 }
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-noto-serif">
            ジャンル別に探す
          </h2>
          <p className="text-lg text-gray-600">
            あなたの気分に合わせて、お気に入りの一冊を見つけてください
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mockCategories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
