import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.welcomePage}>
          Welcome to <a style={{color: "blue"}} href="https://nextjs.org">Next.js!</a>
        </h1>
    </div>
  )
}
