import { Wrapper, CommonCardP, CommonCardValue } from '../styles/cardStyles'
import BaseCard from './BaseCard'

interface Props {
    value: string
}

const MoodCard = ({ value }: Props) => (
    <BaseCard backgroundColor="#AB75AF">
        <Wrapper>
            <CommonCardP>Mood</CommonCardP>
            <CommonCardValue>{value}</CommonCardValue>
        </Wrapper>
    </BaseCard>
)

export default MoodCard
