import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <motion.h1
                    className={styles.title}
                    layoutId="ttftf-title"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    The Thing From the Future
                </motion.h1>
                <h2 className={styles.subtitle}>A game for imagining potential futures.</h2>
                <p className={styles.description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt
                    suscipit illo id odio repellendus culpa excepturi, illum ducimus.
                </p>
                <Link href="/play">
                    <button className={`generate-button ${styles.playButton}`}>play now</button>
                </Link>
                <p>
                    <a className={styles.howToPlay} href="#">
                        how do I play?
                    </a>
                </p>
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
