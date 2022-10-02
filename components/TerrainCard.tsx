import { useState } from 'react'
import styled from 'styled-components'
import { Wrapper, ArcCardP, CommonCardValue, CommonCardP } from '../styles/cardStyles'
import BaseCard from './BaseCard'

interface Props {
    value1: string
    value2: string
}

const TerrainCard = ({ value1, value2 }: Props) => {
    const [flipped, setFlipped] = useState(false)
    const isWildard = [value1, value2].includes('wildcard')

    if (isWildard) {
        return (
            <BaseCard backgroundColor="#27AEEE">
                <Wrapper>
                    <ArcCardP>Terrain</ArcCardP>
                    <CommonCardValue>wildcard</CommonCardValue>
                    <Description>topic or location of your choice</Description>
                </Wrapper>
            </BaseCard>
        )
    }

    return (
        <BaseCard backgroundColor="#27AEEE">
            <TerrainWrapper onClick={() => setFlipped(!flipped)} flipped={flipped}>
                <TopPosition>
                    <CardType>Terrain</CardType>
                    <CommonCardValue>{value1}</CommonCardValue>
                </TopPosition>
                <SkewedDivider />
                <BottomPosition>
                    <CardType>Terrain</CardType>
                    <CommonCardValue>{value2}</CommonCardValue>
                </BottomPosition>
            </TerrainWrapper>
        </BaseCard>
    )
}

const Description = styled(CommonCardP)`
    position: relative;
    top: 35px;
    text-transform: lowercase;
`

const TerrainWrapper = styled.div<{ flipped: boolean }>`
    --offset: 10px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transform: ${(props) => (props.flipped ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const TopPosition = styled.div`
    position: absolute;
    top: var(--offset);
`

const BottomPosition = styled.div`
    position: relative;
    bottom: var(--offset);
    transform: rotate(180deg);
`

const CardType = styled(ArcCardP)`
    margin-bottom: 3px;
`

const SkewedDivider = styled.div`
    position: absolute;
    top: 49.2%;
    background-color: black;
    width: 100%;
    height: 4px;
    transform: skewY(6deg);
`

export default TerrainCard
