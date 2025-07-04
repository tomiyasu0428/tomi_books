import { Card } from '@/components/ui/Card';

// 仮の型定義
type Category = {
  name: string;
  icon: string;
  count: number;
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card as="a" href={`/categories/${category.name}`} className="p-6 text-center hover-lift transition-colors">
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
      <p className="text-sm text-gray-500">{category.count}作品</p>
    </Card>
  );
}
