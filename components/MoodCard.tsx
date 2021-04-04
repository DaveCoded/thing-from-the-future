import BaseCard from './BaseCard'
import { MoodCard } from '../types/cardTypes'

interface Props {
    details: MoodCard
}

const MoodCard = ({ details }: Props) => {
    const { value, variation } = details

    return (
        <BaseCard>
            <h3>{variation}</h3>
            <p>{value}</p>
        </BaseCard>
    )
}

export default MoodCard
