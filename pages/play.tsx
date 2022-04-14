import { useState } from 'react'
import styled from 'styled-components'

import ObjectCard from '../components/ObjectCard'
import MoodCard from '../components/MoodCard'
import TerrainCard from '../components/TerrainCard'
import ArcCard from '../components/ArcCard'
import { getAllCards } from '../helpers/cardHelpers'
import cardData from '../data/classic-cards.json'
import Timer from '../components/Timer'
import ActionButton from '../components/ActionButton'

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
        <MaxWidthWrapper>
            <Nav>
                <h2>The Thing From the Future</h2>
            </Nav>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '8rem'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: '3rem',
                        position: 'relative'
                    }}
                >
                    <ObjectCard value={objectValue} />
                    <MoodCard value={moodValue} />
                    <TerrainCard value1={terrainValue1} value2={terrainValue2} />
                    <ArcCard value={arcValue} duration={arcDuration} />
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '-5rem'
                        }}
                    >
                        <Timer />
                    </div>
                </div>
                <ActionButton onClick={generateNewPlayerCards}>Deal new cards</ActionButton>
            </div>
        </MaxWidthWrapper>
    )
}

const MaxWidthWrapper = styled.main`
    max-width: 1100px;
    margin: 0 auto;
`

const Nav = styled.nav`
    margin: 1.5rem 0;
`
