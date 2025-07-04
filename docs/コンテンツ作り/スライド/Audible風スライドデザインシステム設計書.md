# Audible風スライドデザインシステム設計書

## 概要

「ブックとみ〜耳で旅する本屋さん〜」をコンセプトにしたモダンでクリーンなスライドデザインシステム。深いネイビーブルーをベースにオレンジをアクセントカラーとして使用し、左右非対称のレイアウトで動きを感じさせるデザインを採用。

## デザインコンセプト

- **テーマ**: 「耳で旅する」読書体験
- **スタイル**: モダン、クリーン、プロフェッショナル
- **ターゲット**: オーディオブックに興味のあるユーザー
- **感情**: ワクワク感、信頼感、親しみやすさ

## カラーパレット

### プライマリカラー
```css
/* メインカラー */
--primary-navy: #1A2B47;        /* 深いネイビーブルー（背景） */
--primary-navy-light: #2A3B57;  /* ライトネイビー（グラデーション用） */

/* アクセントカラー */
--accent-orange: #FF9900;       /* オレンジ（強調・CTA） */

/* ベースカラー */
--background-light: #F5F5F5;    /* 薄いグレー */
--background-white: #FFFFFF;    /* ホワイト */
--text-white: #FFFFFF;          /* テキスト白 */
--text-light: rgba(255, 255, 255, 0.7);  /* 薄い白テキスト */
--text-dark: #1A2B47;          /* ダークテキスト */
```

### カラー使用ルール
- **背景**: プライマリネイビーのグラデーション
- **タイトル**: アクセントオレンジ
- **本文**: ホワイト
- **サブテキスト**: 透明度70%のホワイト
- **強調**: アクセントオレンジ
- **CTA**: アクセントオレンジ背景にダークテキスト

## タイポグラフィ

### フォントファミリー
```css
font-family: 'Helvetica Neue', Arial, sans-serif;
```

### フォントサイズ階層

#### フロントページ（タイトルスライド）
- **メインタイトル**: 72px, font-weight: bold
- **サブタイトル**: 36px, font-weight: 300
- **キャプション**: 24px

#### コンテンツページ
- **ページタイトル**: 36px, font-weight: bold
- **本文**: 24px, line-height: 1.6
- **サブテキスト**: 20px
- **ラベル**: 18px
- **小テキスト**: 16px

### テキストスタイル
```css
.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FF9900;
}

.content {
  font-size: 24px;
  line-height: 1.6;
}

.highlight {
  color: #FF9900;
  font-weight: bold;
}

.info-label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
}

.info-value {
  font-size: 20px;
  margin-bottom: 15px;
}
```

## レイアウトシステム

### 基本構造
```css
.slide-container {
  width: 1280px;
  min-height: 720px;
  background: linear-gradient(135deg, #1A2B47 0%, #2A3B57 100%);
  color: white;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  position: relative;
}
```

### レイアウトパターン

#### パターン1: 左テキスト・右画像
```html
<div class="slide-container flex p-16 relative">
  <div class="w-1/2 pr-8">
    <!-- テキストコンテンツ -->
  </div>
  <div class="w-1/2 flex justify-center items-center">
    <!-- 画像コンテンツ -->
  </div>
</div>
```

#### パターン2: 右テキスト・左画像
```html
<div class="slide-container flex p-16 relative">
  <div class="w-1/2 flex justify-center items-center">
    <!-- 画像コンテンツ -->
  </div>
  <div class="w-1/2 pl-8">
    <!-- テキストコンテンツ -->
  </div>
</div>
```

#### パターン3: センター配置（タイトル・エンディング）
```html
<div class="slide-container flex flex-col justify-center items-center px-20 py-16 relative">
  <!-- センターコンテンツ -->
</div>
```

## コンポーネント設計

### 1. 波デザイン要素
```css
.wave-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23FF9900" fill-opacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  background-repeat: no-repeat;
}
```

### 2. 特徴バッジ
```css
.feature-badge {
  background-color: #FF9900;
  color: #1A2B47;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  margin-top: 15px;
  margin-right: 10px;
}

.feature-icon {
  margin-right: 8px;
}
```

### 3. 書籍カバー
```css
.book-cover {
  width: 350px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
}

.book-cover:hover {
  transform: scale(1.05);
}
```

### 4. 情報グリッド
```css
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
```

### 5. CTAボタン
```css
.cta-button {
  background-color: #FF9900;
  color: #1A2B47;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 153, 0, 0.3);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 153, 0, 0.4);
}
```

### 6. ステップ表示
```css
.step-container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 60px;
}

.step {
  width: 220px;
  text-align: center;
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: #FF9900;
  color: #1A2B47;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 15px;
}
```

## アニメーション・インタラクション

### ホバーエフェクト
```css
/* 書籍カバーのホバー */
.book-cover:hover {
  transform: scale(1.05);
}

/* ボタンのホバー */
.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 153, 0, 0.4);
}

/* 浮遊アニメーション */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.floating-element {
  animation: float 5s infinite ease-in-out;
}
```

## アイコン使用ガイドライン

### Font Awesome アイコン
```html
<!-- CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
```

### 推奨アイコン
- **オーディオ関連**: `fas fa-headphones`, `fas fa-microphone-alt`, `fas fa-volume-up`
- **本・読書**: `fas fa-book`, `fas fa-book-open`, `fas fa-bookmark`
- **時間**: `fas fa-clock`, `fas fa-hourglass-half`
- **評価**: `fas fa-star`, `fas fa-heart`
- **デバイス**: `fas fa-mobile-alt`, `fas fa-tablet-alt`, `fas fa-laptop`
- **ナビゲーション**: `fas fa-chevron-right`, `fas fa-arrow-right`

## データ可視化

### Chart.js 設定
```javascript
// 基本設定
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    },
    x: {
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    }
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(26, 43, 71, 0.9)',
      titleColor: '#FF9900',
      bodyColor: 'white',
      borderColor: '#FF9900',
      borderWidth: 1
    }
  }
};
```

## 必要なライブラリ・CDN

### HTML テンプレート
```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
      /* カスタムCSS */
    </style>
  </head>
  <body>
    <div class="slide-container">
      <!-- コンテンツ -->
    </div>
  </body>
</html>
```

## 使用例・テンプレート

### 基本コンテンツスライド
```html
<div class="slide-container flex p-16 relative">
  <div class="w-1/2 pr-8">
    <h1 class="title">スライドタイトル</h1>
    <div class="content">
      <p class="mb-6">メインコンテンツ</p>
      
      <div class="grid grid-cols-2 gap-4 mt-8">
        <div>
          <p class="info-label">ラベル1</p>
          <p class="info-value">値1</p>
        </div>
        <div>
          <p class="info-label">ラベル2</p>
          <p class="info-value">値2</p>
        </div>
      </div>
      
      <div class="feature-badge">
        <i class="fas fa-star feature-icon"></i>
        <span>特徴</span>
      </div>
    </div>
  </div>
  
  <div class="w-1/2 flex justify-center items-center">
    <img src="image.jpg" alt="説明" class="book-cover">
  </div>
  
  <div class="wave-bottom"></div>
</div>
```

## カスタマイズガイド

### 色の変更
1. CSS変数を更新
2. グラデーションの色を調整
3. アクセントカラーを統一

### レイアウトの調整
1. `w-1/2`クラスで幅を調整
2. `p-16`でパディングを変更
3. `gap-4`でグリッドの間隔を調整

### フォントの変更
1. `font-family`を更新
2. フォントサイズクラスを調整
3. 行間（`line-height`）を調整

## ベストプラクティス

### デザイン
- 一貫性のあるカラーパレットを維持
- 適切なコントラスト比を確保
- 読みやすいフォントサイズを使用
- 視覚的階層を明確にする

### レイアウト
- 左右非対称で動きを演出
- 適切な余白を確保
- 画像とテキストのバランスを取る
- レスポンシブ対応を考慮

### アクセシビリティ
- 十分なコントラスト比
- 意味のあるalt属性
- キーボードナビゲーション対応
- スクリーンリーダー対応

## 拡張可能性

このデザインシステムは以下の用途に転用可能：

1. **プロダクト紹介スライド**
2. **企業プレゼンテーション**
3. **教育コンテンツ**
4. **マーケティング資料**
5. **ウェビナー資料**

各用途に応じて、カラーパレットやアイコン、画像を調整することで、ブランドに合わせたカスタマイズが可能です。

