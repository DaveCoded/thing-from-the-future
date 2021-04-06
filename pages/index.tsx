import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                The thing from the future
            </h1>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam sunt suscipit illo id odio repellendus culpa excepturi,
                        illum ducimus. Nobis, iure? Ipsam nihil deserunt quas dolorum ullam!
                        Reprehenderit nobis ex quasi nesciunt necessitatibus beatae est,
                        asperiores modi, dolore similique ea ducimus eum cum nam facere dolor
                        dolorem saepe libero facilis.
                    </p>
                    <Link href="/play">
                        <button className="generate-button">
                            play now
                        </button>
                    </Link>
                    <p>
                        <a href="#">how do I play?</a>
                    </p>
                </div>        
        </main>

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    </div>
  )
}
