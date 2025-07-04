# 「耳で旅する本屋さん」Sanity + Next.js サイト構築タスクリスト

**Sanity (Headless CMS) + Next.js + Vercel** をベースに、構造化コンテンツとAIワークフローでサイトを作り上げるためのタスク一覧です。

---

## Phase 0: 技術基盤整備

- [x] Sanity プロジェクト作成 (`npm create sanity@latest`) - プロジェクトID: `o9qqw90y` に修正済み
- [x] データセット `production` を作成
- [x] GitHub リポジトリ & Vercel プロジェクト初期化
- [x] ローカル環境変数 (`.env.local`) 設定完了
- [ ] Vercel 環境変数 (SANITY_PROJECT_ID, DATASET, TOKEN) 設定

## Phase 1: コンテンツモデリング

- [x] スキーマ定義 (`book`, `author`, `narrator`, `review`, `category`) - 全スキーマ完成
- [x] 参照フィールド & Portable Text 設計 - blockContent.tsで実装
- [x] スキーマレビュー (店主 & Dev MTG) - TypeScript型定義含めて完了
- [x] 初期データ 5件インポート完了 (`scripts/seed-data.ts` を使用)

## Phase 2: フロントエンド雛形 (Next.js App Router)

- [x] `create-next-app` で TypeScript + TailwindCSS プロジェクト生成 - website/ディレクトリ作成済み
- [x] GROQ クエリユーティリティ (`lib/sanity.ts`) 作成 - 基本クエリ定義済み
- [x] トップページ (`/`) で最新レビューカード表示 - **安定化のため一時的にモックデータで表示中**
- [ ] 動的ルート `/review/[slug]` で書籍詳細ページ
- [ ] ISR 設定 & Sanity Webhook 連携

## Phase 3: UI デザイン & ブランディング

- [x] カラーパレット選定 (Warm Brown / Accent Orange / Cream) - TailwindCSS設定済み
- [x] フォント & タイポグラフィ設定 (Noto Sans JP, Noto Serif JP) - Google Fonts実装済み
- [x] グローバルナビゲーション実装 (Reviews / Categories / Authors / About) - Header/Footer完成
- [x] Hero セクション実装 (グラデーション背景 + キャッチコピー) - 完成
- [x] コンポーネント設計 (ReviewCard, Hero, Header, Footer) - 基本コンポーネント完成

## Phase 4: AI Assist & 自動化

- [ ] Sanity Growth プランへアップグレード
- [ ] AI Assist Instruction 作成 (要約, SEO, X投稿テンプレート)
- [ ] `scripts/generate-summary.ts` で自動要約取得
- [ ] GitHub Actions で textlint 校正チェック

## Phase 5: 公開 & グロース

- [ ] ドメイン `mimitabi-books.com` を Vercel に接続
- [ ] GA4 & Search Console 設定
- [ ] 旧 WordPress URL → 新 URL 301 リダイレクト
- [ ] 毎週 レビュー 2本 + 特集 1本 投稿
- [ ] Looker Studio ダッシュボードで KPI 可視化

---

このリストを GitHub Issues に分割し、担当者と期限を割り当てて進行してください。 