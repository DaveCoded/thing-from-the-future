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
        </div>
    </BaseCard>
)

export default ObjectCard
