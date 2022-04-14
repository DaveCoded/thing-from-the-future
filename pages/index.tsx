import Head from 'next/head'
import styled from 'styled-components'

import CardsSection from '../components/sections/CardsSection'
import HowToSection from '../components/sections/HowToSection'
import LandingSection from '../components/sections/LandingSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <LandingSection />
                <HowToSection />
                <CardsSection />
            </Main>
        </>
    )
}

const Main = styled.main`
    padding: 5rem 0;
    display: flex;
    flex: 1;
    flex-direction: column;
`
