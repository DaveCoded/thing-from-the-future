import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 85%;
`

export const ArcCardP = styled.p`
    font-family: 'Futura Condensed';
    color: white;
    font-size: 1.125rem;
    letter-spacing: 1.8px;
`

export const CommonCardP = styled(ArcCardP)`
    margin-top: -30px;
`

export const ArcCardValue = styled.h3`
    font-size: 2rem;
`

export const CommonCardValue = styled(ArcCardValue)`
    margin-top: 15px;
`
