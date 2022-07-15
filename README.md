# Twitter clone

![スクリーンショット 2022-07-15 190644](https://user-images.githubusercontent.com/83369665/179203146-48863efd-201a-4838-8e3e-0330b39f6f8a.png)
![スクリーンショット 2022-07-15 190913](https://user-images.githubusercontent.com/83369665/179203174-9d9fb5f0-ac9e-4a1e-9e4b-15b945a3cf1b.png)
![スクリーンショット 2022-07-15 190940](https://user-images.githubusercontent.com/83369665/179203194-9654d3c2-b05d-4388-a4b4-1e243fb3ad38.png)
![スクリーンショット 2022-07-15 191024](https://user-images.githubusercontent.com/83369665/179203216-9c71913d-4013-4b09-98c0-36f9b76279ed.png)
![スクリーンショット 2022-07-15 191100](https://user-images.githubusercontent.com/83369665/179203236-cb5c93b2-1e0e-4582-bcec-ebedefc179b2.png)

## プロジェクト立ち上げ
npx create-next-app -e with-tailwindcss twitter-clone

ディレクトリ移動

cd twitter-clone

サーバー起動確認

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

sanityフォルダ内に.gitignoreを作成しnode_modulesを記載

ディレクトリ移動

cd sanity

Sanityを起動

sanity start

url: https://github.com/sanity-io/next-sanity

yarn add next-sanity @portabletext/react @sanity/image-url

yarn add next-sanity

yarn add react-timeago

↑のものだとエラー出たので↓のもの推奨

yarn add --dev @types/react-timeago

## react-hot-toast

yarn add react-hot-toast

## NextAuth

yarn add next-auth

## tailwind-scrollbar-hide

yarn add tailwind-scrollbar-hide