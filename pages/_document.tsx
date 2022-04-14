import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ReactFragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        // SSR support for styled-components
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: ((
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ) as unknown) as ReactFragment // ! This may need some attention
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="icon"
                        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
