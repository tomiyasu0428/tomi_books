import { Metadata } from 'next'
import Link from 'next/link'
import { client, REVIEWS_QUERY } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'レビュー一覧 - 耳で旅する本屋さん',
  description: 'オーディオブック作品のレビューを一覧でご覧いただけます。店主ブックとみが厳選した作品たちをお楽しみください。',
}

// モックデータ（後でSanityから取得）
const mockReviews = [
  {
    _id: '1',
    title: '心に響く感動の名作',
    slug: { current: 'kokoro-ni-hibiku-kando-no-meisaku' },
    rating: 5,
    publishedAt: '2024-07-01T00:00:00Z',
    book: {
      title: '君の名は。',
      author: { name: '新海誠', slug: { current: 'makoto-shinkai' } },
      narrator: { name: '神木隆之介', slug: { current: 'ryunosuke-kamiki' } },
      coverImage: null
    },
    categories: [
      { title: 'アニメ・ライトノベル', slug: { current: 'anime-light-novel' } },
      { title: '感動', slug: { current: 'kando' } }
    ]
  },
  {
    _id: '2',
    title: 'ビジネスマンの必読書',
    slug: { current: 'businessman-no-hissudokusho' },
    rating: 4,
    publishedAt: '2024-06-28T00:00:00Z',
    book: {
      title: '7つの習慣',
      author: { name: 'スティーブン・R・コヴィー', slug: { current: 'stephen-covey' } },
      narrator: { name: '朗読太郎', slug: { current: 'roudoku-taro' } },
      coverImage: null
    },
    categories: [
      { title: 'ビジネス・自己啓発', slug: { current: 'business-self-help' } }
    ]
  },
  {
    _id: '3',
    title: 'ミステリーの新境地',
    slug: { current: 'mystery-no-shinkyochi' },
    rating: 5,
    publishedAt: '2024-06-25T00:00:00Z',
    book: {
      title: '容疑者Xの献身',
      author: { name: '東野圭吾', slug: { current: 'keigo-higashino' } },
      narrator: { name: '朗読花子', slug: { current: 'roudoku-hanako' } },
      coverImage: null
    },
    categories: [
      { title: 'ミステリー・サスペンス', slug: { current: 'mystery-suspense' } }
    ]
  },
  {
    _id: '4',
    title: '哲学への誘い',
    slug: { current: 'tetsugaku-e-no-izanai' },
    rating: 4,
    publishedAt: '2024-06-20T00:00:00Z',
    book: {
      title: '嫌われる勇気',
      author: { name: '岸見一郎', slug: { current: 'ichiro-kishimi' } },
      narrator: { name: '朗読三郎', slug: { current: 'roudoku-saburo' } },
      coverImage: null
    },
    categories: [
      { title: '心理学・哲学', slug: { current: 'psychology-philosophy' } }
    ]
  },
  {
    _id: '5',
    title: 'SF小説の傑作',
    slug: { current: 'sf-shousetsu-no-kessaku' },
    rating: 5,
    publishedAt: '2024-06-15T00:00:00Z',
    book: {
      title: '三体',
      author: { name: '劉慈欣', slug: { current: 'liu-cixin' } },
      narrator: { name: '朗読四郎', slug: { current: 'roudoku-shiro' } },
      coverImage: null
    },
    categories: [
      { title: 'SF・ファンタジー', slug: { current: 'scifi-fantasy' } }
    ]
  },
  {
    _id: '6',
    title: '歴史好きにおすすめ',
    slug: { current: 'rekishi-zuki-ni-osusume' },
    rating: 4,
    publishedAt: '2024-06-10T00:00:00Z',
    book: {
      title: '応仁の乱',
      author: { name: '呉座勇一', slug: { current: 'yuichi-goza' } },
      narrator: { name: '朗読五郎', slug: { current: 'roudoku-goro' } },
      coverImage: null
    },
    categories: [
      { title: '歴史・時代小説', slug: { current: 'history' } }
    ]
  }
]

export default async function ReviewsPage() {
  // 実際はSanityからデータを取得
  // const reviews = await client.fetch(REVIEWS_QUERY)
  const reviews = mockReviews

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-noto-serif">
          レビュー一覧
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          店主ブックとみが実際に聴いて感動した、厳選のオーディオブック作品たちをご紹介します。
          あなたの次の一冊との出会いがここにあるかもしれません。
        </p>
      </div>

      {/* フィルター・ソート（将来実装予定） */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <span className="text-sm text-gray-600">
            {reviews.length}件のレビュー
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="newest">新着順</option>
            <option value="rating">評価順</option>
            <option value="title">タイトル順</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="all">すべてのカテゴリー</option>
            <option value="novel">小説・文学</option>
            <option value="business">ビジネス・自己啓発</option>
            <option value="mystery">ミステリー・サスペンス</option>
            <option value="scifi">SF・ファンタジー</option>
          </select>
        </div>
      </div>

      {/* レビューカード一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <article key={review._id} className="bg-white rounded-xl shadow-card hover:shadow-card-hover hover-lift transition-all duration-200 overflow-hidden">
            <Link href={`/reviews/${review.slug.current}`} className="block">
              {/* 書影プレースホルダー */}
              <div className="aspect-[3/4] relative bg-gray-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                  <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* レビュータイトル */}
                <h2 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 font-noto-serif">
                  {review.title}
                </h2>

                {/* 書籍情報 */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-1">{review.book.title}</p>
                  <p className="text-xs text-gray-500">
                    著: {review.book.author.name}
                    {review.book.narrator && ` / 読: ${review.book.narrator.name}`}
                  </p>
                </div>

                {/* 評価と公開日 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-accent-500 text-sm font-medium mr-2">
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
        ))}
      </div>

      {/* ページネーション（将来実装予定） */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-1">
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-l-md">
            前へ
          </button>
          <button className="px-3 py-2 text-sm bg-primary-800 text-white border border-primary-800">
            1
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300">
            2
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300">
            3
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-r-md">
            次へ
          </button>
        </nav>
      </div>

      {/* CTAセクション */}
      <div className="mt-16 text-center bg-gradient-to-r from-primary-800 to-accent-600 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 font-noto-serif">
          あなたのおすすめ作品も教えてください
        </h2>
        <p className="mb-6 opacity-90">
          みんなで作る「声の地図」にあなたの声も加えませんか？
        </p>
        <Link
          href="/community"
          className="inline-block bg-white text-primary-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          コミュニティに参加する
        </Link>
      </div>
    </div>
  )
}