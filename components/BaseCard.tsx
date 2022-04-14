import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    backgroundColor: string
}

const BaseCard = ({ children, backgroundColor }: Props) => (
    <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>
)

const Wrapper = styled.div<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
    text-transform: uppercase;
    height: 290px;
    width: 200px;
    border: 8px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default BaseCard
