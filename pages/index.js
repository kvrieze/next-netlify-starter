import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Group Travel Odyssey's New Test Page!" />
        <p className="description">
          <span style="color:blue; font-size:30px;">Get started by editing <code>pages/index.js</code>
    </span>
        </p>
      </main>

      <Footer />
    </div>
  )
}
