import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var ReactRotatingText = require('react-rotating-text');


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Stindberg</title>
        <meta name="description" content="Project Stindberg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <ReactRotatingText items={['Project Stindberg', 'Coming soon']} />
        </h1>
      </main>

    </div>
  )
}
