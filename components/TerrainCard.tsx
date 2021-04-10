import BaseCard from './BaseCard'
import styles from './ObjectCard.module.css'

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
                <div className={styles.Container}>
                    <p>Terrain</p>
                    <h3>wildcard</h3>
                    <p
                        style={{
                            position: 'relative',
                            top: '35px',
                            textTransform: 'lowercase'
                        }}
                    >
                        topic or location of your choice
                    </p>
                </div>
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
                    <p style={{ marginBottom: '3px' }}>Terrain</p>
                    <h3>{value1}</h3>
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
                    <p style={{ marginBottom: '3px' }}>Terrain</p>
                    <h3>{value2}</h3>
                </div>
            </div>
        </BaseCard>
    )
}

export default TerrainCard
