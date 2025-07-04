import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* サイト情報 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white text-primary-800 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                ブ
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold font-noto-serif">耳で旅する本屋さん</h2>
                <p className="text-sm text-gray-300">音と物語で、新しい世界へ。</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Audibleで聴ける素晴らしいオーディオブック作品をご紹介。
              店主「ブックとみ」の感性とAIの力で、あなたにぴったりの一冊との出会いをお手伝いします。
              一緒に「声の地図」を作っていきませんか？
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  レビュー一覧
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  カテゴリー
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-gray-300 hover:text-white transition-colors">
                  著者一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  note
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 耳で旅する本屋さん. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}