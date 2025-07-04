# 「耳で旅する本屋さん」Sanity + Next.js 構築企画書

このドキュメントは、WordPress から **Sanity (Headless CMS) + Next.js + Vercel** スタックへ移行するための簡易ブループリントです。詳細な技術背景は [[「耳で旅する本屋さん」のための戦略的・技術的ブループリント：SanityのコンポーザブルコンテンツプラットフォームとAI能力の活用]] を参照してください。

---

## 1. ゴール

1. 構造化コンテンツを活用し、あらゆるチャネルに再利用可能な「コンテンツレイヤー」を構築する
2. Sanity AI Assist を導入し、レビュー制作・SNS投稿・SEO のワークフローを自動化 / 高速化する
3. Next.js + Vercel により、高速かつ拡張性の高いフロントエンドを実現する

---

## 2. マイルストーン / 主要タスク

| フェーズ | 期間 | 主要タスク | 成果物 |
|-----------|------|------------|-------|
| 0. 技術基盤整備 | Day 0-1 | • Sanity アカウント作成<br/>• Vercel + GitHub リポジトリ初期化 | Sanity プロジェクト & 空のデータセット |
| 1. コンテンツモデリング | Day 1-3 | • スキーマ定義 (book, author, narrator, review, category)<br/>• 参考: blueprint の `schemaTypes` サンプル | `schemas/` ディレクトリ一式 |
| 2. フロントエンド雛形 | Day 3-5 | • `create-next-app` + TailwindCSS<br/>• GROQ クエリでデータ取得<br/>• トップ・詳細ページのモック | `/pages` に動作する基本ページ |
| 3. AI Assist 設定 | Day 6 | • Growth プランへアップグレード<br/>• AI Assist インストール & API Key 設定<br/>• 指示(Instruction)登録（要約・メタディスクリプション等） | AI Assist 動作確認動画 |
| 4. デプロイ & ISR | Day 7 | • Vercel デプロイ<br/>• Sanity Webhook → Revalidate API 連携 | 公開URL & ISR 再生成ログ |
| 5. 移行 & コンテンツ投入 | Week 2 | • 既存レビュー記事 10件を Sanity へインポート<br/>• 画像Assetsアップロード | 本番コンテンツ入りサイト |
| 6. 拡張機能 | 以降 | • Embeddings Index API でセマンティック検索<br/>• Looker Studio 連携ダッシュボード | 検索 UI / 分析レポート |

---

## 3. サイトレイアウト & UI デザイン

### 情報設計 (IA)
サイトを『本屋』として捉え、以下 4 階層で構造化します。
1. グローバルナビ: Reviews / Features / Community / About / Search  
2. コンテンツ階層: ジャンル別・テーマ別の特集ページ  
3. オブジェクト: Review, Book, Author, Narrator ドキュメント  
4. メタ: タグ・カテゴリー・シリーズ

### トップページ レイアウト
```
Hero (Full-bleed Image & Catch Copy)
└─ SearchBar (作品・ジャンル検索)
Latest Reviews (3 columns CardList)
└─ CTA「もっと聴く」ボタン
Video Section (YouTube iframe)
Community Poll 「次に聴きたい本は？」
```

### 書籍詳細ページ
```
Header: 書影 + 基本情報 + Audible CTA
Media: 予告編動画 / 試聴プレーヤー
ReviewBody: あらすじ・聴きどころ・感想
RelatedBooks: 同著者・同ジャンル
Comments: Fan Discussion
```

### ビジュアルガイド
• Color: Warm Brown #7B4B2A / Accent Orange #FF9E3D / Cream #FFF8F0  
• Font: Noto Sans JP (Body) + Playfair Display (Heading)  
• Iconography: Phosphor Icons  
• 余白: 8pt グリッド

### レスポンシブデザイン方針
モバイルファースト。カード幅は `min(100%, 360px)`。画像は `next/legacyImage` で最適化。Tailwind の `md:` ブレークポイントを基準に 2 ⇒ 3 列へ変化。

---

## 4. システム構成図 (簡易)

```mermaid
graph TD
  subgraph CMS
    A[Sanity Content Lake]
  end
  subgraph Hosting
    B[Vercel (Next.js)]
  end
  A -->|GROQ / CDN| B
  B -->|Webhook| A
```

---

## 5. リスク & 対策

| リスク | 対策 |
|--------|------|
| Sanity Growth プラン費用増 | 予算に月額 $15/ユーザー を計上し、無償枠で検証後アップグレード |
| 開発リソース不足 (React/TS) | コントリビューター募集、あるいはフリーランスへの部分委託 |
| SEO 転送 (WordPress→新URL) | 旧 WP URL → 新 Next.js への 301 リダイレクト設定 |

---

## 6. 次の一手

1. **Day 0:** この企画書を GitHub にコミットし、Issues でタスクを立てる
2. **Day 1:** `npm create sanity@latest` を実行しプロジェクトを初期化
3. **Day 3:** スキーマレビュー MTG を実施（@店主, @Dev）
4. **Day 5:** アーリーアクセス版サイトをステークホルダーに共有
5. **Week 2:** 最初の10レビューを入れた状態でプレスリリース✨

---

> 詳細な技術解説・比較・コードサンプルについては [[「耳で旅する本屋さん」のための戦略的・技術的ブループリント：SanityのコンポーザブルコンテンツプラットフォームとAI能力の活用]] を参照してください。
