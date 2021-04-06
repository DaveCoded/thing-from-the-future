import BaseCard from './BaseCard'
import styles from './ObjectCard.module.css' // same styles as object card

interface Props {
    value: string
}

const MoodCard = ({ value }: Props) => (
    <BaseCard backgroundColor="#AB75AF">
        <div className={styles.Container}>
            <p>Mood</p>
            <h3>{value}</h3>
        </div>
    </BaseCard>
)

export default MoodCard
