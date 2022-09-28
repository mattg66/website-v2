import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <meta name="title" content="Matt Gaynor - Computer Networks Undergrad" />
                <meta name="description" content="I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://matt.gaynor.tech/" />
                <meta property="og:title" content="Matt Gaynor - Computer Networks Undergrad" />
                <meta property="og:description" content="I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV" />
                <meta property="og:image" content="https://matt.gaynor.tech/media/background.8b54e259-0.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="matt.gaynor.tech" />
                <meta property="twitter:title" content="Matt Gaynor - Computer Networks Undergrad" />
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