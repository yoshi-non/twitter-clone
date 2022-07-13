# Twitter clone

## プロジェクト立ち上げ
npx create-next-app -e with-tailwindcss twitter-clone

- ディレクトリ移動

cd twitter-clone

- サーバー起動確認

yarn run dev

以下のurlで確認

url: http://localhost:3000

### vscode推奨拡張機能
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense

## ページの初期化
index.tsx
```TSX
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <h1>Hello World</h1>
    </div>
  )
}

export default Home
```
これでHello Worldが表示されればOK

## コンポーネント作成
アイコン追加

yarn add @heroicons/react

Twitter埋め込み機能

yarn add react-twitter-embed

## Sanity CMS
[The Unified Content Platform - Sanity.io](https://www.sanity.io/)でgoogleアカウントでサインイン

sanityを始めて使う方はグローバルインストールを先にする※すでに入っているなら必要ない

npm install -g @sanity/cli

### sanityをプロジェクトに導入
sanity init --coupon sonny2022

- Login type Googleを選択しWebページでログイン確認が求められるので上記でログインしたgoogleアカウントでログイン

- Project name: twitter-nextjs-clone

- Use the default dataset configuration? Yes

- Project output path:sanity

- Select project template Blog (schema)

sanityファルダ内に.gitignoreを作成しnode_modulesを記載