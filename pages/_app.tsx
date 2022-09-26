import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
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