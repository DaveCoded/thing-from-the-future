import styled from 'styled-components'

const HowToSection = () => (
    <Background>
        <MaxWidthWrapper>
            <HowToPlay id="how-to-play">How to play</HowToPlay>
            <div>
                <Aim>Aim of the game</Aim>
                <ColumnWrapper>
                    <Column>
                        <P>
                            Using the constraints provided by four cards, invent a{' '}
                            <em>Thing From the Future</em> within the time limit. Gain points by
                            coming up with the most interesting, entertaining, or amusing imagined
                            object.
                        </P>
                        <P>
                            Play as many rounds as you like, and with as many people as you like,
                            though between two and six works best, with four being optimal. And set
                            whatever time limit you like, though we’d suggest between three and five
                            minutes works nicely.
                        </P>
                        <P>
                            Once time is up, have one player read out all the <em>Things</em>{' '}
                            without giving away their originator. Then you can all cast a vote for
                            your favourite and award a point to each player for each vote cast for
                            that was cast for their <em>Thing</em>.
                        </P>
                    </Column>
                    <Column>
                        <Image alt="placeholder" src="https://via.placeholder.com/400" />
                    </Column>
                </ColumnWrapper>
            </div>
        </MaxWidthWrapper>
    </Background>
)

const Background = styled.section`
    background-color: lightgrey;
`

const MaxWidthWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 6rem;
`

const P = styled.p`
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 1.3rem;
    width: 85%;
`

const HowToPlay = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    padding: 1.3rem 3rem;
    border: 5px solid black;
    background-color: white;
    width: fit-content;
    margin: 8rem auto;
`

const Aim = styled.h3`
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 44px;
    margin-bottom: 2rem;
`

const ColumnWrapper = styled.div`
    display: flex;
`

const Column = styled.div`
    flex: 1;
`

const Image = styled.img`
    margin-left: 15%;
`

export default HowToSection
