import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-accent-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* メインタイトル */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-noto-serif">
            <span className="block">耳で旅する</span>
            <span className="block text-accent-300">本屋さん</span>
          </h1>

          {/* サブタイトル */}
          <p className="text-xl lg:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            音と物語で、新しい世界へ。<br />
            Audibleの良作との出会いを、忘れられない旅に変える。
          </p>

          {/* 説明文 */}
          <p className="text-lg mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            店主「ブックとみ」の感性とAIの力で、あなたにぴったりのオーディオブック作品をご紹介。
            一緒に「声の地図」を作っていきませんか？
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/reviews"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              最新レビューを見る
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              このサイトについて
            </Link>
          </div>

          {/* 特徴 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">音で感じる</h3>
              <p className="text-gray-200 text-sm">
                ナレーターの声と物語の雰囲気を<br />動画と音で深く伝えます
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI で加速</h3>
              <p className="text-gray-200 text-sm">
                AIの力で作品の魅力を多角的に<br />発見・紹介していきます
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">共に創る</h3>
              <p className="text-gray-200 text-sm">
                ファンとの対話を通じて<br />みんなで「声の地図」を育てます
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}