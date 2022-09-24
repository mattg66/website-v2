import { useEffect, useRef, useState } from "react"
import VideoPlaceholder from "../components/VideoPlaceholder"
import NoSSR from "../components/NoSSR"
const Video: React.FC<{}> = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play();
    }, [loading]);

    return (
        <>
            <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div
                    className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
                >
                    Welcome to my site!
                </div>
                <VideoPlaceholder loading={loading} />
                <NoSSR>
                    <video
                        playsInline
                        muted
                        loop
                        ref={videoRef}
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
export default Video