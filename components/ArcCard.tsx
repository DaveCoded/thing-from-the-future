import { ArcCardP, ArcCardValue } from '../styles/cardStyles'
import BaseCard from './BaseCard'

interface Props {
    value: string
    duration: string
}

const ArcCard = ({ value, duration }: Props) => (
    <BaseCard backgroundColor="#7DBF30">
        <div>
            <ArcCardP>Arc</ArcCardP>
            <ArcCardValue>{value}</ArcCardValue>
            <ArcCardP>{duration}</ArcCardP>
        </div>
    </BaseCard>
)

export default ArcCard
