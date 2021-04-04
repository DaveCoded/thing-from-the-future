import BaseCard from './BaseCard'
import { ArcCard } from '../types/cardTypes'

interface Props {
    details: ArcCard
}

const ArcCard = ({ details: { value, variation, duration } }: Props) => (
    <BaseCard>
        <h3>{variation}</h3>
        <p>{value}</p>
        <p>{duration}</p>
    </BaseCard>
)

export default ArcCard
