import ObjectCard from '../components/ObjectCard'
import MoodCard from '../components/MoodCard'
import TerrainCard from '../components/TerrainCard'
import ArcCard from '../components/ArcCard'
import { useState } from 'react'
import { getAllCards } from '../helpers/cardHelpers'
import cardData from '../data/classic-cards.json'
import { motion } from 'framer-motion'
import styles from './play.module.css'
import Timer from '../components/Timer'

export default function Play() {
    const initialCardState = getAllCards(cardData)
    const [playerCards, setPlayerCards] = useState(initialCardState)
    const {
        objectValue,
        moodValue,
        terrainValue1,
        terrainValue2,
        arcDuration,
        arcValue
    } = playerCards

    function generateNewPlayerCards() {
        const newCards = getAllCards(cardData)
        setPlayerCards(newCards)
    }

    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <motion.h2
                    layoutId="ttftf-title"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    The Thing From the Future
                </motion.h2>
            </nav>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div>
                    <Timer />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '90%',
                        margin: '8rem 0 3rem 0'
                    }}
                >
                    <ObjectCard value={objectValue} />
                    <MoodCard value={moodValue} />
                    <TerrainCard value1={terrainValue1} value2={terrainValue2} />
                    <ArcCard value={arcValue} duration={arcDuration} />
                </div>
                <button className="generate-button" onClick={generateNewPlayerCards}>
                    Deal new cards
                </button>
            </div>
        </main>
    )
}
