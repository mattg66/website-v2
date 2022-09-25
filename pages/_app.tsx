import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;