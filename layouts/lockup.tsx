import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import VideoPlaceholder from "../components/VideoPlaceholder"
import NoSSR from "../components/NoSSR"
import Image from "next/image"
import PFP from "../public/media/pfp.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Lockup: React.FC<{loading: number, setLoading: Dispatch<SetStateAction<number>>}> = ({ loading, setLoading, children }) => {


    return (
        <>
                <div className="relative z-30 p-5 text-2xl text-white font-open-sans text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="max-w-xs mx-auto mb-5 md:mb-0">
                            <Image src={PFP} className="rounded-full" onLoadingComplete={() => setLoading(loading + 1)}/>
                        </div>
                        <div className="text-2xl xs:text-4xl font-bold my-auto">
                            <h1 className="text-5xl">Matt Gaynor</h1>
                            <h3 className="mt-4">Networking Consulting Engineer</h3>
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
                    </div>
                </div>
                <NoSSR>
                    <video
                        playsInline
                        muted
                        loop
                        autoPlay
                        className="absolute z-5 w-auto min-w-full min-h-full max-w-none blur-lg"
                        src="media/background.8b54e259.mp4"
                        onLoadedData={() => setLoading(loading + 1)}
                    >
                        Your browser does not support the video tag.
                    </video>
                    <VideoPlaceholder loading={loading !== 2}/>
                </NoSSR>
        </>
    )
}
export default Lockup