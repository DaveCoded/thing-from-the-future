import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AimOfTheGame from '../components/sections/AimOfTheGame'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.landingSection}>
                    <h1 className={styles.title}>The Thing From the Future</h1>
                    <h2 className={styles.subtitle}>A game for imagining potential futures.</h2>
                    <p className={styles.description}>
                        The Thing from the Future was pioneered by Situation Labs and although cards
                        are no longer being printed, you can generate your own right here on this
                        website!
                    </p>
                    <Link href="/play">
                        <button className={`generate-button ${styles.playButton}`}>play now</button>
                    </Link>
                    <p>
                        <a className={styles.howToPlayLink} href="#">
                            how do I play?
                        </a>
                    </p>
                </section>

                <section className={styles.howToPlay}>
                    <h2>How to play</h2>
                    <AimOfTheGame />
                </section>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}
