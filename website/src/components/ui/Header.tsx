import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="bg-primary-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                ブ
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-primary-800 font-noto-serif">
                  耳で旅する本屋さん
                </h1>
                <p className="text-xs text-gray-600">音と物語で、新しい世界へ。</p>
              </div>
            </Link>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/reviews"
              className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
            >
              レビュー
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
            >
              カテゴリー
            </Link>
            <Link
              href="/authors"
              className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
            >
              著者
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
            >
              このサイトについて
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-800 focus:outline-none focus:text-primary-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}