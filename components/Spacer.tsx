import styled from 'styled-components'

interface Props {
    height?: string
    width?: string
}

const Spacer = styled.div<Props>`
    height: ${(props) => props.height || '1rem'};
    width: ${(props) => props.width || '100%'};
`

export default Spacer
