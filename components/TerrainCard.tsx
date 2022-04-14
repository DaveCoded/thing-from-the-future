import { Wrapper, ArcCardP, CommonCardValue } from '../styles/cardStyles'
import BaseCard from './BaseCard'

interface Props {
    value1: string
    value2: string
}

const PX_FROM_EDGE = '10px'

const TerrainCard = ({ value1, value2 }: Props) => {
    const isWildard = [value1, value2].includes('wildcard')

    if (isWildard) {
        return (
            <BaseCard backgroundColor="#27AEEE">
                <Wrapper>
                    <ArcCardP>Terrain</ArcCardP>
                    <CommonCardValue>wildcard</CommonCardValue>
                    <ArcCardP
                        style={{
                            position: 'relative',
                            top: '35px',
                            textTransform: 'lowercase'
                        }}
                    >
                        topic or location of your choice
                    </ArcCardP>
                </Wrapper>
            </BaseCard>
        )
    }

    return (
        <BaseCard backgroundColor="#27AEEE">
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div style={{ position: 'absolute', top: PX_FROM_EDGE }}>
                    <ArcCardP style={{ marginBottom: '3px' }}>Terrain</ArcCardP>
                    <CommonCardValue>{value1}</CommonCardValue>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '4px',
                        transform: 'skewY(6deg)'
                    }}
                />
                <div
                    style={{
                        position: 'relative',
                        bottom: PX_FROM_EDGE,
                        transform: 'rotate(180deg)'
                    }}
                >
                    <ArcCardP style={{ marginBottom: '3px' }}>Terrain</ArcCardP>
                    <CommonCardValue>{value2}</CommonCardValue>
                </div>
            </div>
        </BaseCard>
    )
}

export default TerrainCard
