# Yuki Takagi Portfolio

本リポジトリは、エンジニア高木優希のポートフォリオサイトです。Next.js(App Router) + TypeScript をベースに、モダンで遊び心のあるUIを実装しています。

## 公開URL

- 本番: https://portfolio-site-psi-olive.vercel.app/

## 技術スタック

- フレームワーク: Next.js 15 / React 19 / TypeScript
- UI/スタイル: CSS Modules, Framer Motion, React Icons
- デプロイ: Vercel

## 主要セクション

- About Me: 所属や趣味などの簡単な紹介
- Tech Stack: フロントエンド/バックエンド/その他のカテゴリ別チップ表示
  - チップクリックで詳細ダイアログ表示
  - モバイルでもはみ出さないレイアウト（省略表示/折返し制御）
  - その他には「AWS CDK」などツール・言語以外も収録
- Internship: インターン歴
  - 「就業型インターン」「短期インターン」の2カテゴリでタブ切り替え
  - タイムラインからカードグリッドへ刷新し、スクロール回数を削減
  - ARIA属性によるアクセシビリティ配慮（role="tablist/tab" 等）
- Projects: 代表的な制作物の一覧
- Future: 今後の展望

## ローカル開発

### 必要要件

- Node.js 18 以上を推奨

### セットアップ

```bash
npm ci
```

### 開発サーバー起動

```bash
npm run dev
# http://localhost:3000 を開く
```

### 本番ビルド

```bash
npm run build
npm start
```

## スクリプト一覧

- `npm run dev`: 開発サーバー（Turbopack）
- `npm run build`: 本番ビルド
- `npm start`: 本番サーバー起動
- `npm run lint`: Lint 実行

## ディレクトリ構成（抜粋）

```
src/
  app/
    page.tsx        # ページ構成
    globals.css     # グローバルスタイル
  components/
    about-me.tsx / about-me.module.css
    tech-stack.tsx / tech-stack.module.css
    Internship.tsx / Internship.module.css
    project.tsx / project.module.css
    future.tsx / future.module.css
    Footer.tsx / footer.module.css
```

## スタイルとアクセシビリティ

- CSS Modules によるセクションごとのスコープドスタイリング
- Framer Motion によるマイクロインタラクション
- タブUIに `role="tablist"/"tab"` と `aria-selected` 等を付与
- キーボード操作でカードへアクセス可能（Enter/クリックで詳細へ）

## デプロイ

- Vercel でホスティングしています。環境変数は現状不要です。

## ライセンス

© 2025 Yuki Takagi. All rights reserved.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
