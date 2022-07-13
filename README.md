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
```TSX:index.tsx
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