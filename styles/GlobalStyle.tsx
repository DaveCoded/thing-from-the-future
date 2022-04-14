import { createGlobalStyle } from 'styled-components'
import { fontStyles } from './fontStyles'

export const GlobalStyle = createGlobalStyle`
    ${fontStyles}

    :root {
        --focus-color: rgb(235, 107, 21);
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        scroll-behavior: smooth;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    div,
    main,
    section {
        margin: 0;
        padding: 0;
    }

    p {
        font-family: 'AvenirNext', sans-serif;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: 'Futura', sans-serif;
        font-weight: 500;
    }

    a {
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
`
