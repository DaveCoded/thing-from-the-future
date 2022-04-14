import styled from 'styled-components'

interface Props {
    onClick?: () => void
    type?: 'button' | 'a'
    children: React.ReactNode
}

const ActionButton = ({ children, onClick, type = 'button', ...delegated }: Props) => (
    <Button onClick={onClick} as={type} {...delegated}>
        {children}
    </Button>
)

const Button = styled.button`
    cursor: pointer;
    font-family: 'Futura Condensed';
    font-size: 1.3rem;
    text-align: center;
    margin: 0;
    color: white;
    background-color: black;
    padding: 1.1rem 2rem;
    border: 2px solid white;
    text-transform: uppercase;
    border-radius: 6px;
    box-shadow: black 0px 0px 0px 4px;

    &:focus {
        outline: none;
        box-shadow: black 0px 0px 0px 4px, var(--focus-color) 0px 0px 0px 7px;
    }
`

export default ActionButton
