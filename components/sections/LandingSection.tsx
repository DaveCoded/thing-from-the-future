import styled from 'styled-components'
import Link from 'next/link'
import ActionButton from '../ActionButton'

const LandingSection = () => (
    <Wrapper>
        <MainHeading>The Thing From the Future</MainHeading>
        <Subheading>A game for imagining potential futures.</Subheading>
        <Description>
            The Thing from the Future was pioneered by Situation Labs and although cards are no
            longer being printed, you can generate your own right here on this website!
        </Description>
        <Link href="/play">
            <PlayButton type="a">play now</PlayButton>
        </Link>
        <p>
            <a href="#how-to-play">how do I play?</a>
        </p>
    </Wrapper>
)

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
`

const MainHeading = styled.h1`
    margin: 0;
    margin-bottom: 2.6rem;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
`

const Subheading = styled.h2`
    font-size: 2.2rem;
    max-width: 35rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-align: center;
`

const Description = styled.p`
    max-width: 35rem;
    line-height: 1.5;
    font-size: 1.2rem;
    margin-bottom: 2.6rem;
    text-align: center;
`

const PlayButton = styled(ActionButton)`
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    width: 12rem;
`

export default LandingSection
