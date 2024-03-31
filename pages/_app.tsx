import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { clarity } from 'react-microsoft-clarity';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        clarity.init('lpe2bicsgt')
    }, [])
    return (
        <>
            <Head>
                <title>Matt Gaynor - Computer Networks Undergraduate</title>
            </Head>
            <GoogleReCaptchaProvider
                reCaptchaKey="6LfDztwZAAAAAMHH1M_JoQm9k8bj7MaopFXtsDSH"
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: "head",
                    nonce: undefined,
                }}
            >
                <Component {...pageProps} />
            </GoogleReCaptchaProvider>
        </>
    )
}

export default MyApp;