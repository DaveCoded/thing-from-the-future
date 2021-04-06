import BaseCard from './BaseCard'
import styles from './ObjectCard.module.css'

interface Props {
    value1: string
    value2: string
}

const TRANSLATE_TOP = '50px'

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
            <div style={{ position: 'relative', top: `-${TRANSLATE_TOP}` }}>
                <p style={{ marginBottom: '3px' }}>Terrain</p>
                <h3>{value1}</h3>
            </div>
            <div
                style={{
                    backgroundColor: 'black',
                    width: '100%',
                    height: '4px',
                    transform: 'skewY(6deg)'
                }}
            />
            <div style={{ position: 'relative', top: TRANSLATE_TOP, transform: 'rotate(180deg)' }}>
                <p style={{ marginBottom: '3px' }}>Terrain</p>
                <h3>{value2}</h3>
            </div>
        </BaseCard>
    )
}

export default TerrainCard
