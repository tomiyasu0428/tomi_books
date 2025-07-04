# 耳で旅する本屋さん - Website

## セットアップ手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.local`ファイルを作成し、以下の値を設定してください：

```
NEXT_PUBLIC_SANITY_PROJECT_ID=o9qqv90y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-07-11
SANITY_API_TOKEN=your-api-token-here
```

### 3. Sanity APIトークンの取得
1. https://sanity.io/manage にアクセス
2. 「Book_tomi」プロジェクトを選択
3. 「API」タブ → 「Tokens」セクション
4. 「Add API token」で新しいトークンを作成
5. 権限を「Editor」に設定
6. 生成されたトークンを`.env.local`の`SANITY_API_TOKEN`に設定

### 4. Sanity Studioの起動
```bash
npm run sanity:dev
```
ブラウザでhttp://localhost:3333にアクセスしてSanity Studioを確認

### 5. 初期データの投入
```bash
npm run seed
```

### 6. 開発サーバーの起動
```bash
npm run dev
```
ブラウザでhttp://localhost:3000にアクセス

## 利用可能なコマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバー起動
- `npm run sanity:dev` - Sanity Studio起動
- `npm run sanity:build` - Sanity Studioビルド
- `npm run sanity:deploy` - Sanity Studioデプロイ
- `npm run seed` - 初期データ投入

## APIからモックデータへの切り替え

現在のページは開発用にモックデータを使用しています。実際のSanityデータを使用するには：

1. 上記の手順でSanity APIトークンを設定
2. 初期データを投入（`npm run seed`）
3. ページファイルでコメントアウトされたSanity APIコールを有効化

### 例：トップページの切り替え
`src/app/page.tsx`で：
```typescript
// モックデータ（現在）
const reviews = mockReviews

// ↓ 実際のAPIデータに切り替え
const reviews = await client.fetch(REVIEWS_QUERY)
```