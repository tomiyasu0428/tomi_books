import Link from 'next/link';

export default function CommunitySection() {
  return (
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
  );
}
