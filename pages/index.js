import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NOU LAGE!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        <h1>COMING SOON IN AUGUST 2022</h1> 
        </p>
      </main>

    </div>
  )
}
