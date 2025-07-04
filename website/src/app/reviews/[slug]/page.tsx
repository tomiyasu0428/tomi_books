import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { client, REVIEW_QUERY } from '@/lib/sanity'
import { Review } from '../../../../sanity.types'

interface ReviewPageProps {
  params: { slug: string }
}

// モックデータ（後でSanityから取得）
const mockReviewData: Review = {
  _id: '1',
  _type: 'review',
  _createdAt: '2024-07-01T00:00:00Z',
  _updatedAt: '2024-07-01T00:00:00Z',
  _rev: 'rev1',
  title: '心に響く感動の名作',
  slug: { current: 'kokoro-ni-hibiku-kando-no-meisaku', _type: 'slug' },
  rating: 5,
  listeningRating: 5,
  storyRating: 5,
  reviewBody: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'この作品は、まさに心を揺さぶる感動の名作でした。新海誠さんの繊細な文章と、神木隆之介さんの感情豊かな朗読が見事に調和し、聞く者を物語の世界へと引き込んでいきます。'
        }
      ]
    }
  ],
  goodPoints: [
    '神木隆之介さんの感情豊かな朗読',
    '繊細で美しい文章表現',
    '心に響くストーリー展開'
  ],
  concernPoints: [
    '感情移入しすぎて涙が止まらなくなる',
    '夜聞くと眠れなくなる可能性'
  ],
  recommendedFor: [
    '感動的な恋愛小説が好きな方',
    '美しい日本語の朗読を楽しみたい方',
    'アニメ映画版のファン'
  ],
  publishedAt: '2024-07-01T00:00:00Z',
  book: {
    _id: 'book1',
    _type: 'book',
    _createdAt: '2024-07-01T00:00:00Z',
    _updatedAt: '2024-07-01T00:00:00Z',
    _rev: 'rev1',
    title: '君の名は。',
    slug: { current: 'kimi-no-na-wa', _type: 'slug' },
    author: {
      _id: 'author1',
      _type: 'author',
      _createdAt: '2024-07-01T00:00:00Z',
      _updatedAt: '2024-07-01T00:00:00Z',
      _rev: 'rev1',
      name: '新海誠',
      slug: { current: 'makoto-shinkai', _type: 'slug' },
      bio: '日本のアニメーション監督、映画監督。代表作に『君の名は。』『天気の子』『すずめの戸締り』など。'
    },
    narrator: {
      _id: 'narrator1',
      _type: 'narrator',
      _createdAt: '2024-07-01T00:00:00Z',
      _updatedAt: '2024-07-01T00:00:00Z',
      _rev: 'rev1',
      name: '神木隆之介',
      slug: { current: 'ryunosuke-kamiki', _type: 'slug' },
      bio: '日本の俳優、声優。子役時代から活動し、多くの映画やアニメで主演を務める。',
      voiceCharacteristics: '透明感のある優しい声質で、感情表現が豊か'
    },
    publishedYear: 2016,
    audibleUrl: 'https://www.audible.co.jp/pd/B01234567',
    duration: 180,
    description: '千年ぶりの彗星来訪が1か月後に迫ったある日、山深い田舎町に暮らす女子高校生・三葉は、自分が東京の男子高校生になっている夢を見る。一方、東京で暮らす男子高校生・瀧も、山奥の町で女子高校生になっている不思議な夢を見ていた。'
  },
  categories: [
    {
      _id: 'cat1',
      _type: 'category',
      _createdAt: '2024-07-01T00:00:00Z',
      _updatedAt: '2024-07-01T00:00:00Z',
      _rev: 'rev1',
      title: 'アニメ・ライトノベル',
      slug: { current: 'anime-light-novel', _type: 'slug' }
    },
    {
      _id: 'cat2',
      _type: 'category',
      _createdAt: '2024-07-01T00:00:00Z',
      _updatedAt: '2024-07-01T00:00:00Z',
      _rev: 'rev1',
      title: '感動',
      slug: { current: 'kando', _type: 'slug' }
    }
  ],
  tags: ['恋愛', '青春', 'SF', '映画原作'],
  featured: true,
  seoTitle: '『君の名は。』レビュー - 神木隆之介の朗読で心に響く感動体験',
  seoDescription: '新海誠作品『君の名は。』のオーディオブック版を徹底レビュー。神木隆之介さんの感情豊かな朗読が織りなす感動の物語体験をお伝えします。'
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  // 実際はSanityからデータを取得
  const review = mockReviewData

  return {
    title: review.seoTitle || `${review.title} - 耳で旅する本屋さん`,
    description: review.seoDescription || `${review.book.title}のレビュー記事です。`,
    openGraph: {
      title: review.title,
      description: review.seoDescription || `${review.book.title}のレビュー記事です。`,
      type: 'article',
      publishedTime: review.publishedAt,
    },
  }
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  // 実際はSanityからデータを取得する処理
  // const review = await client.fetch(REVIEW_QUERY, { slug: params.slug })
  // if (!review) notFound()
  
  const review = mockReviewData

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* パンくずナビ */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary-800">ホーム</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/reviews" className="hover:text-primary-800">レビュー</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{review.title}</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-noto-serif">
          {review.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          <time dateTime={review.publishedAt}>
            {new Date(review.publishedAt).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>店主 ブックとみ</span>
        </div>

        {/* カテゴリータグ */}
        {review.categories && (
          <div className="flex flex-wrap gap-2 mb-6">
            {review.categories.map((category) => (
              <Link
                key={category._id}
                href={`/categories/${category.slug.current}`}
                className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm hover:bg-primary-200 transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2">
          {/* 評価セクション */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-noto-serif">総合評価</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl text-accent-500 font-bold mb-1">
                  {renderStars(review.rating)}
                </div>
                <div className="text-sm text-gray-600">総合評価</div>
                <div className="text-lg font-bold text-gray-900">{review.rating}/5</div>
              </div>
              {review.listeningRating && (
                <div className="text-center">
                  <div className="text-2xl text-accent-500 font-bold mb-1">
                    {renderStars(review.listeningRating)}
                  </div>
                  <div className="text-sm text-gray-600">聴きやすさ</div>
                  <div className="text-lg font-bold text-gray-900">{review.listeningRating}/5</div>
                </div>
              )}
              {review.storyRating && (
                <div className="text-center">
                  <div className="text-2xl text-accent-500 font-bold mb-1">
                    {renderStars(review.storyRating)}
                  </div>
                  <div className="text-sm text-gray-600">ストーリー</div>
                  <div className="text-lg font-bold text-gray-900">{review.storyRating}/5</div>
                </div>
              )}
            </div>
          </div>

          {/* レビュー本文 */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-noto-serif">レビュー</h2>
            <div className="leading-relaxed text-gray-700">
              {/* 実際はPortable Textのレンダリングが必要 */}
              <p>
                この作品は、まさに心を揺さぶる感動の名作でした。新海誠さんの繊細な文章と、神木隆之介さんの感情豊かな朗読が見事に調和し、聞く者を物語の世界へと引き込んでいきます。
              </p>
              <p>
                特に印象的だったのは、主人公たちの心の動きを丁寧に描写した部分です。神木隆之介さんの透明感のある声質が、青春の瑞々しさと切なさを見事に表現していて、まるで自分がその場にいるような臨場感を味わえました。
              </p>
              <p>
                オーディオブックという形式だからこそ味わえる、声による感情表現の豊かさを存分に楽しめる作品です。通勤時間や家事の合間に聞くだけでなく、ゆっくりと腰を据えて聞き入りたくなる、そんな魅力に満ちた一冊でした。
              </p>
            </div>
          </div>

          {/* 良かった点・気になった点 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {review.goodPoints && review.goodPoints.length > 0 && (
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">👍 良かった点</h3>
                <ul className="space-y-2">
                  {review.goodPoints.map((point, index) => (
                    <li key={index} className="text-green-700">• {point}</li>
                  ))}
                </ul>
              </div>
            )}
            {review.concernPoints && review.concernPoints.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3">🤔 気になった点</h3>
                <ul className="space-y-2">
                  {review.concernPoints.map((point, index) => (
                    <li key={index} className="text-amber-700">• {point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* おすすめな人 */}
          {review.recommendedFor && review.recommendedFor.length > 0 && (
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎯 こんな人におすすめ</h3>
              <ul className="space-y-2">
                {review.recommendedFor.map((person, index) => (
                  <li key={index} className="text-blue-700">• {person}</li>
                ))}
              </ul>
            </div>
          )}

          {/* タグ */}
          {review.tags && review.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* サイドバー */}
        <div className="lg:col-span-1">
          {/* 書籍情報 */}
          <div className="bg-white rounded-xl shadow-card p-6 mb-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-noto-serif">書籍情報</h3>
            
            {/* 書影 */}
            <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-2">{review.book.title}</h4>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div>
                <span className="font-medium">著者:</span>{' '}
                <Link href={`/authors/${review.book.author.slug.current}`} className="hover:text-primary-800">
                  {review.book.author.name}
                </Link>
              </div>
              {review.book.narrator && (
                <div>
                  <span className="font-medium">ナレーター:</span>{' '}
                  <Link href={`/narrators/${review.book.narrator.slug.current}`} className="hover:text-primary-800">
                    {review.book.narrator.name}
                  </Link>
                </div>
              )}
              {review.book.publishedYear && (
                <div>
                  <span className="font-medium">出版年:</span> {review.book.publishedYear}年
                </div>
              )}
              {review.book.duration && (
                <div>
                  <span className="font-medium">再生時間:</span> 約{review.book.duration}分
                </div>
              )}
            </div>

            {/* あらすじ */}
            {review.book.description && (
              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-2">あらすじ</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{review.book.description}</p>
              </div>
            )}

            {/* Audibleリンク */}
            {review.book.audibleUrl && (
              <a
                href={review.book.audibleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Audibleで聴く
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}