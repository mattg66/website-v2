import { useEffect, useRef, useState } from "react"
import VideoPlaceholder from "../components/VideoPlaceholder"
import NoSSR from "../components/NoSSR"
import Image from "next/image"
import PFP from "../public/media/profile.4949af75.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Lockup: React.FC<{}> = ({ children }) => {
    const [loading, setLoading] = useState(true)


    return (
        <>
            <header className="relative flex items-center justify-center min-h-screen overflow-hidden">
                <div className="relative z-30 p-5 text-2xl text-white font-open-sans text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="max-w-xs mx-auto mb-5 md:mb-0">
                            <Image src={PFP} className="rounded-full" />
                        </div>
                        <div className="text-2xl xs:text-4xl font-bold my-auto">
                            <h1>Matt Gaynor</h1>
                            <h3 className="mt-4">Computer Networks Undergraduate</h3>
                            <a href="https://www.linkedin.com/in/matt-gaynor/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size='2x' className="p-5" />
                            </a>
                            <a href="https://github.com/mattg66" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size='2x' className="p-5" />
                            </a>
                        </div>
                    </div>
                    <div className="grid mt-20 text-3xl">
                        <h4>I'm Matt, a motivated and enthusiastic individual with a passion for all things IT and AV</h4>
                        <h4 className="mt-4">See some of my work below</h4>
                    </div>
                </div>
                <VideoPlaceholder loading={loading} />
                <NoSSR>
                    <video
                        playsInline
                        muted
                        loop
                        autoPlay
                        className="absolute z-5 w-auto min-w-full min-h-full max-w-none blur-lg"
                        src="media/background.8b54e259.mp4"
                        onLoadedData={() => setLoading(false)}
                    >
                        Your browser does not support the video tag.
                    </video>
                </NoSSR>
            </header>
        </>
    )
}
export default Lockup