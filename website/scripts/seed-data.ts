import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o9qqw90y',
  dataset: 'production',
  apiVersion: '2024-07-11',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN // 管理者トークンが必要
})

// 初期データ
const seedData = {
  authors: [
    {
      _type: 'author',
      name: '新海誠',
      slug: { _type: 'slug', current: 'makoto-shinkai' },
      bio: '日本のアニメーション監督、映画監督。代表作に『君の名は。』『天気の子』『すずめの戸締り』など。',
      birthYear: 1973,
      nationality: '日本'
    },
    {
      _type: 'author',
      name: 'スティーブン・R・コヴィー',
      slug: { _type: 'slug', current: 'stephen-covey' },
      bio: 'アメリカの作家、経営コンサルタント。『7つの習慣』の著者として世界的に知られる。',
      birthYear: 1932,
      nationality: 'アメリカ'
    },
    {
      _type: 'author',
      name: '東野圭吾',
      slug: { _type: 'slug', current: 'keigo-higashino' },
      bio: '日本の小説家。ミステリー作家として多くの作品を発表し、映像化作品も多数。',
      birthYear: 1958,
      nationality: '日本'
    }
  ],
  narrators: [
    {
      _type: 'narrator',
      name: '神木隆之介',
      slug: { _type: 'slug', current: 'ryunosuke-kamiki' },
      bio: '日本の俳優、声優。子役時代から活動し、多くの映画やアニメで主演を務める。',
      voiceCharacteristics: '透明感のある優しい声質で、感情表現が豊か',
      specialties: ['novel', 'scifi']
    },
    {
      _type: 'narrator',
      name: '朗読太郎',
      slug: { _type: 'slug', current: 'roudoku-taro' },
      bio: 'プロのナレーター。ビジネス書の朗読を多数手がける。',
      voiceCharacteristics: '落ち着いた低音で、説得力のある語り口',
      specialties: ['business', 'nonfiction']
    },
    {
      _type: 'narrator',
      name: '朗読花子',
      slug: { _type: 'slug', current: 'roudoku-hanako' },
      bio: 'プロのナレーター。ミステリー作品の朗読を得意とする。',
      voiceCharacteristics: 'メリハリの利いた表現力豊かな声',
      specialties: ['mystery', 'novel']
    }
  ],
  categories: [
    {
      _type: 'category',
      title: 'アニメ・ライトノベル',
      slug: { _type: 'slug', current: 'anime-light-novel' },
      description: 'アニメ原作やライトノベル作品',
      color: 'blue'
    },
    {
      _type: 'category',
      title: '感動',
      slug: { _type: 'slug', current: 'kando' },
      description: '心に響く感動的な作品',
      color: 'orange'
    },
    {
      _type: 'category',
      title: 'ビジネス・自己啓発',
      slug: { _type: 'slug', current: 'business-self-help' },
      description: 'ビジネススキルや自己啓発に関する作品',
      color: 'green'
    },
    {
      _type: 'category',
      title: 'ミステリー・サスペンス',
      slug: { _type: 'slug', current: 'mystery-suspense' },
      description: '謎解きやサスペンス要素のある作品',
      color: 'purple'
    }
  ]
}

async function createDocuments() {
  try {
    console.log('Starting data seeding...')

    // 著者を作成
    console.log('Creating authors...')
    const authors = await Promise.all(
      seedData.authors.map(author => client.create(author))
    )
    console.log(`Created ${authors.length} authors`)

    // ナレーターを作成
    console.log('Creating narrators...')
    const narrators = await Promise.all(
      seedData.narrators.map(narrator => client.create(narrator))
    )
    console.log(`Created ${narrators.length} narrators`)

    // カテゴリーを作成
    console.log('Creating categories...')
    const categories = await Promise.all(
      seedData.categories.map(category => client.create(category))
    )
    console.log(`Created ${categories.length} categories`)

    // 本を作成
    console.log('Creating books...')
    const books = await Promise.all([
      client.create({
        _type: 'book',
        title: '君の名は。',
        slug: { _type: 'slug', current: 'kimi-no-na-wa' },
        author: { _type: 'reference', _ref: authors[0]._id },
        narrator: { _type: 'reference', _ref: narrators[0]._id },
        publishedYear: 2016,
        audibleUrl: 'https://www.audible.co.jp/pd/B01234567',
        duration: 180,
        description: '千年ぶりの彗星来訪が1か月後に迫ったある日、山深い田舎町に暮らす女子高校生・三葉は、自分が東京の男子高校生になっている夢を見る。一方、東京で暮らす男子高校生・瀧も、山奥の町で女子高校生になっている不思議な夢を見ていた。',
        genres: ['novel', 'scifi']
      }),
      client.create({
        _type: 'book',
        title: '7つの習慣',
        slug: { _type: 'slug', current: '7tsu-no-shuukan' },
        author: { _type: 'reference', _ref: authors[1]._id },
        narrator: { _type: 'reference', _ref: narrators[1]._id },
        publishedYear: 1989,
        audibleUrl: 'https://www.audible.co.jp/pd/B01234568',
        duration: 720,
        description: '人格主義に基づく人間関係論の名著。個人にも組織にも、さらに社会全体にも通用する効果的な生き方の原則を提示する。',
        genres: ['business']
      }),
      client.create({
        _type: 'book',
        title: '容疑者Xの献身',
        slug: { _type: 'slug', current: 'yougisha-x-no-kenshin' },
        author: { _type: 'reference', _ref: authors[2]._id },
        narrator: { _type: 'reference', _ref: narrators[2]._id },
        publishedYear: 2005,
        audibleUrl: 'https://www.audible.co.jp/pd/B01234569',
        duration: 420,
        description: '花岡靖子は前夫・富樫慎二を殺してしまう。娘の美里と死体を隠そうとした彼女たちの前に、隣人の石神が現れた。彼は完全犯罪を約束する……。',
        genres: ['mystery']
      })
    ])
    console.log(`Created ${books.length} books`)

    // レビューを作成
    console.log('Creating reviews...')
    const reviews = await Promise.all([
      client.create({
        _type: 'review',
        title: '心に響く感動の名作',
        slug: { _type: 'slug', current: 'kokoro-ni-hibiku-kando-no-meisaku' },
        book: { _type: 'reference', _ref: books[0]._id },
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
        categories: [
          { _type: 'reference', _ref: categories[0]._id },
          { _type: 'reference', _ref: categories[1]._id }
        ],
        tags: ['恋愛', '青春', 'SF', '映画原作'],
        featured: true,
        publishedAt: '2024-07-01T00:00:00Z',
        seoTitle: '『君の名は。』レビュー - 神木隆之介の朗読で心に響く感動体験',
        seoDescription: '新海誠作品『君の名は。』のオーディオブック版を徹底レビュー。神木隆之介さんの感情豊かな朗読が織りなす感動の物語体験をお伝えします。'
      }),
      client.create({
        _type: 'review',
        title: 'ビジネスマンの必読書',
        slug: { _type: 'slug', current: 'businessman-no-hissudokusho' },
        book: { _type: 'reference', _ref: books[1]._id },
        rating: 4,
        listeningRating: 4,
        storyRating: 4,
        reviewBody: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'ビジネスパーソンとして成長したい方には必読の一冊です。7つの習慣という普遍的な原則を、オーディオブックで学ぶことで、通勤時間も有効活用できます。'
              }
            ]
          }
        ],
        goodPoints: [
          '実践的で具体的なアドバイス',
          '通勤時間に学習できる',
          '繰り返し聞いて身につく'
        ],
        concernPoints: [
          '内容が濃すぎて一度では理解しきれない',
          'メモを取りながら聞きたくなる'
        ],
        recommendedFor: [
          'ビジネススキルを向上させたい方',
          '人間関係を改善したい方',
          'リーダーシップを学びたい方'
        ],
        categories: [
          { _type: 'reference', _ref: categories[2]._id }
        ],
        tags: ['ビジネス', '自己啓発', 'リーダーシップ'],
        featured: false,
        publishedAt: '2024-06-28T00:00:00Z',
        seoTitle: '『7つの習慣』レビュー - 人生を変える普遍的な原則',
        seoDescription: 'スティーブン・R・コヴィーの名著『7つの習慣』をオーディオブックで学ぶメリットと感想をお伝えします。'
      }),
      client.create({
        _type: 'review',
        title: 'ミステリーの新境地',
        slug: { _type: 'slug', current: 'mystery-no-shinkyochi' },
        book: { _type: 'reference', _ref: books[2]._id },
        rating: 5,
        listeningRating: 4,
        storyRating: 5,
        reviewBody: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: '東野圭吾さんの代表作の一つである本作を、優秀なナレーターの朗読で楽しめるのは格別です。最後の驚愕の真実まで、一気に聞き進めてしまいました。'
              }
            ]
          }
        ],
        goodPoints: [
          '予想がつかない巧妙なプロット',
          'ナレーターの絶妙な演技',
          '最後まで飽きさせない展開'
        ],
        concernPoints: [
          '途中で止められなくなる',
          '夜中に聞くと怖い場面がある'
        ],
        recommendedFor: [
          'ミステリー小説が好きな方',
          '東野圭吾作品のファン',
          '推理小説初心者にも'
        ],
        categories: [
          { _type: 'reference', _ref: categories[3]._id }
        ],
        tags: ['ミステリー', '推理', '東野圭吾'],
        featured: true,
        publishedAt: '2024-06-25T00:00:00Z',
        seoTitle: '『容疑者Xの献身』レビュー - 東野圭吾ミステリーの傑作',
        seoDescription: '東野圭吾の代表的なミステリー小説『容疑者Xの献身』のオーディオブック版をレビュー。巧妙なプロットと感動的な結末をお楽しみください。'
      })
    ])
    console.log(`Created ${reviews.length} reviews`)

    console.log('Data seeding completed successfully!')
    console.log('Summary:')
    console.log(`- Authors: ${authors.length}`)
    console.log(`- Narrators: ${narrators.length}`)
    console.log(`- Categories: ${categories.length}`)
    console.log(`- Books: ${books.length}`)
    console.log(`- Reviews: ${reviews.length}`)

  } catch (error) {
    console.error('Error seeding data:', error)
    process.exit(1)
  }
}

// APIトークンが設定されているかチェック
if (!process.env.SANITY_API_TOKEN) {
  console.error('SANITY_API_TOKEN environment variable is required')
  console.log('Please set your Sanity API token:')
  console.log('export SANITY_API_TOKEN="your-token-here"')
  process.exit(1)
}

createDocuments()