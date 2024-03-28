import Image, { ImageProps } from "next/image"
import { useState } from "react"
import { SyncLoader } from "react-spinners"
const LazyImage = (props: ImageProps) => {
    const [isLoading, setLoading] = useState(true)
    return (
        <>
            <div>
                {isLoading ? <div className="flex justify-center items-center h-full">
                    <SyncLoader />
                </div> : <></>}
                <Image {...props} onLoad={() => setLoading(false)} />
            </div>
        </>
    )
}
export default LazyImage