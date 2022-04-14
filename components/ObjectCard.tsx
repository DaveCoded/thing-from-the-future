import { Wrapper, CommonCardP, CommonCardValue } from '../styles/cardStyles'
import BaseCard from './BaseCard'

interface Props {
    value: string
}

const ObjectCard = ({ value }: Props) => (
    <BaseCard backgroundColor="#EB5469">
        <Wrapper>
            <CommonCardP>Object</CommonCardP>
            <CommonCardValue>{value}</CommonCardValue>
            {value === 'wildcard' ? (
                <CommonCardP
                    style={{
                        position: 'relative',
                        top: '35px',
                        textTransform: 'lowercase'
                    }}
                >
                    artifact of your choice
                </CommonCardP>
            ) : null}
        </Wrapper>
    </BaseCard>
)

export default ObjectCard
