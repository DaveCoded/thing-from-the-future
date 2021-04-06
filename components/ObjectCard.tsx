import BaseCard from './BaseCard'
import styles from './ObjectCard.module.css'

interface Props {
    value: string
}

const ObjectCard = ({ value }: Props) => (
    <BaseCard backgroundColor="#EB5469">
        <div className={styles.Container}>
            <p>Object</p>
            <h3>{value}</h3>
            {value === 'wildcard' ? (
                <p
                    style={{
                        position: 'relative',
                        top: '35px',
                        textTransform: 'lowercase'
                    }}
                >
                    artifact of your choice
                </p>
            ) : null}
        </div>
    </BaseCard>
)

export default ObjectCard
