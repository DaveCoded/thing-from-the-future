import BaseCard from './BaseCard'

interface Props {
    value: string
    duration: string
}

const ArcCard = ({ value, duration }: Props) => (
    <BaseCard backgroundColor="#7DBF30">
        <div>
            <p>Arc</p>
            <h3>{value}</h3>
            <p>{duration}</p>
        </div>
    </BaseCard>
)

export default ArcCard
