import BaseCard from './BaseCard'
import { TerrainCard } from '../types/cardTypes'

interface Props {
    details: TerrainCard
}

const TerrainCard = ({ details: { value, variation } }: Props) => (
    <BaseCard>
        <h3>{variation}</h3>
        <p>{value}</p>
    </BaseCard>
)

export default TerrainCard
