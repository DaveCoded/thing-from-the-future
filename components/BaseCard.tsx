import styles from './BaseCard.module.css'

interface Props {
    children: React.ReactNode
    backgroundColor?: string
}

const BaseCard = ({ children, backgroundColor }: Props) => (
    <div className={styles.BaseCard} style={{ backgroundColor }}>
        {children}
    </div>
)

export default BaseCard
