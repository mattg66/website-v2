import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
                <meta name="title" content="Matt Gaynor - Consulting Network Engineer" />
                <meta name="description" content="I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://matt.gaynor.tech/" />
                <meta property="og:title" content="Matt Gaynor - Consulting Network Engineer" />
                <meta property="og:description" content="I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV" />
                <meta property="og:image" content="https://matt.gaynor.tech/media/background.8b54e259-0.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="matt.gaynor.tech" />
                <meta property="twitter:title" content="Matt Gaynor - Consulting Network Engineer" />
                <meta property="twitter:description" content="I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV" />
                <meta property="twitter:image" content="https://matt.gaynor.tech/media/background.8b54e259-0.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}