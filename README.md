# Markdown

ブラウザ上で Markdown を書き、リアルタイムにプレビューできるシンプルな Web アプリです。入力内容はローカルに自動保存されます。

## 機能

- **エディタ**: EasyMDE（ツールバー付き）
- **プレビュー**: GitHub Flavored Markdown 相当の表示
- **自動保存**: 編集内容をブラウザの `localStorage` に保存

## 必要環境

- Node.js 18 以降（推奨）

## セットアップと起動

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
npm start
```

## 技術スタック

- [Next.js](https://nextjs.org/) 14（App Router）
- React 18
- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor) / [EasyMDE](https://github.com/Ionaru/easy-mde)
- [react-markdown](https://github.com/remarkjs/react-markdown)（remark-gfm など）
