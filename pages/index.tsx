import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter clone</title>
      </Head>

      <main>
        <Sidebar/>

        <Feed/>

        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home