import styled from 'styled-components'
import Spacer from '../Spacer'

const CardsSection = () => (
    <MaxWidthWrapper>
        <Heading>The Cards</Heading>
        <Intro>
            Each of the four cards generated for each round provides a different kind of constraint.
        </Intro>
        <Grid>
            <CardExplanation>
                <Subheading>Object</Subheading>
                <p>
                    The Object card tells you the basic form of the thing you'll be inventing, e.g.
                    Beverage, Festival, Prosthetic, Ritual.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Terrain</Subheading>
                <p>
                    The Terrain card tells you what area of life, society or culture the{' '}
                    <em>thing</em> can be found in. Each Terrain card has two options, so you can
                    choose whichever one most oils your imagination gears, e.g. Agriculture,
                    Entertainment, Old Age, Zombies.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Mood</Subheading>
                <p>
                    The Mood card tells you what emotion the <em>thing</em> will elicit from those
                    who use or experience it, e.g. Embarrassment, Hope, Respect, Surprise.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Arc</Subheading>
                <p>
                    The Arc card tells you how many years into the future your <em>thing</em> exists
                    and gives you an idea of what type of future it might be. They are deliberately
                    broad; this is a game for your imagination after all!
                </p>
            </CardExplanation>
        </Grid>
        <Spacer height="6rem" />
        <Heading>Arc types</Heading>
        <Grid>
            <CardExplanation>
                <Subheading>Grow</Subheading>
                <p>
                    Grow is a future where everything is tending to increase: population,
                    production, consumption etc.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Collapse</Subheading>
                <p>
                    Collapse describes a future where many of the things we have now have failed, or
                    are falling apart.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Discipline</Subheading>
                <p>
                    In a discipline future, things are closely controlled, for good or for ill, by
                    any organisation, social structure or individual you can imagine.
                </p>
            </CardExplanation>
            <CardExplanation>
                <Subheading>Transform</Subheading>
                <p>
                    A significant, historical transformation has occurred, be it revolutionary,
                    technological or cultural—or all three or none of the above!
                </p>
            </CardExplanation>
        </Grid>
    </MaxWidthWrapper>
)

const MaxWidthWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 6rem;
    font-size: 20px;
    line-height: 1.5;
`

const Heading = styled.h3`
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 44px;
    margin-bottom: 1rem;
`

const Subheading = styled.h4`
    font-size: 2rem;
    margin-bottom: 1rem;
`

const Intro = styled.p`
    margin-bottom: 2rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem 4rem;
`

const CardExplanation = styled.div``

export default CardsSection
