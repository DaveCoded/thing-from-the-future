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
            <Wrapper>
                <CardsWrapper>
                    <ObjectCard value={objectValue} />
                    <MoodCard value={moodValue} />
                    <TerrainCard value1={terrainValue1} value2={terrainValue2} />
                    <ArcCard value={arcValue} duration={arcDuration} />
                    <TimerWrapper>
                        <Timer />
                    </TimerWrapper>
                </CardsWrapper>
                <ActionButton onClick={generateNewPlayerCards}>Deal new cards</ActionButton>
            </Wrapper>
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 3rem;
    position: relative;
`

const TimerWrapper = styled.div`
    position: absolute;
    right: 0;
    top: -5rem;
`
