import styled from 'styled-components'
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
            {value === 'wildcard' ? <Description>artifact of your choice</Description> : null}
        </Wrapper>
    </BaseCard>
)

const Description = styled(CommonCardP)`
    position: relative;
    top: 35px;
    text-transform: lowercase;
`

export default ObjectCard
