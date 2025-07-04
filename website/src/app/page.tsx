import Hero from '@/components/Hero'
import Link from 'next/link'

// モックデータ（後でSanityから取得）
const mockReviews = [
  {
    _id: '1',
    title: '心に響く感動の名作',
    slug: { current: 'kokoro-ni-hibiku-kando-no-meisaku' },
    rating: 5,
    publishedAt: '2024-07-01',
    book: {
      title: '君の名は。',
      author: { name: '新海誠' },
      narrator: { name: '神木隆之介' },
      coverImage: null
    },
    categories: [
      { title: 'アニメ・ライトノベル' },
      { title: '感動' }
    ]
  },
  {
    _id: '2',
    title: 'ビジネスマンの必読書',
    slug: { current: 'businessman-no-hissudokusho' },
    rating: 4,
    publishedAt: '2024-06-28',
    book: {
      title: '7つの習慣',
      author: { name: 'スティーブン・R・コヴィー' },
      narrator: { name: '朗読太郎' },
      coverImage: null
    },
    categories: [
      { title: 'ビジネス・自己啓発' }
    ]
  },
  {
    _id: '3',
    title: 'ミステリーの新境地',
    slug: { current: 'mystery-no-shinkyochi' },
    rating: 5,
    publishedAt: '2024-06-25',
    book: {
      title: '容疑者Xの献身',
      author: { name: '東野圭吾' },
      narrator: { name: '朗読花子' },
      coverImage: null
    },
    categories: [
      { title: 'ミステリー・サスペンス' }
    ]
  }
]

export default function Home() {
  return (
    <div className="fade-in">
      {/* ヒーローセクション */}
      <Hero />

      {/* 最新レビューセクション */}
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
            {mockReviews.map((review) => (
              <article key={review._id} className="bg-gray-50 rounded-xl p-6 hover-lift">
                <Link href={`/reviews/${review.slug.current}`} className="block">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-noto-serif">
                    {review.title}
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 font-medium">{review.book.title}</p>
                    <p className="text-xs text-gray-500">
                      著: {review.book.author.name} / 読: {review.book.narrator.name}
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
                    {review.categories.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
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

      {/* カテゴリーセクション */}
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
            {[
              { name: '小説・文学', icon: '📚', count: 12 },
              { name: 'ビジネス', icon: '💼', count: 8 },
              { name: 'ミステリー', icon: '🔍', count: 6 },
              { name: 'SF・ファンタジー', icon: '🚀', count: 4 },
              { name: 'ノンフィクション', icon: '📖', count: 7 },
              { name: '自己啓発', icon: '💡', count: 9 },
              { name: '歴史', icon: '🏛️', count: 5 },
              { name: '心理学', icon: '🧠', count: 3 }
            ].map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.name}`}
                className="bg-white p-6 rounded-xl text-center hover-lift border border-gray-200 hover:border-primary-300 transition-colors"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}作品</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* コミュニティセクション */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-noto-serif">
            一緒に「声の地図」を作りませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            あなたのおすすめ作品や感想をお聞かせください。<br />
            みんなで作る素敵なオーディオブックコミュニティを目指しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              コミュニティに参加
            </a>
            <Link
              href="/about"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              このサイトについて
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
