import Image, { ImageProps } from "next/image"
import { useState } from "react"
import { SyncLoader } from "react-spinners"
const LazyImage = (props: ImageProps) => {
    const [isLoading, setLoading] = useState(true)
    return (
        <>
            <div className="relative">
                <Image {...props} loading="lazy" width="100%" height="100%" layout="responsive" objectFit="contain"
                    className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setLoading(false)} />
                {isLoading && <div className="absolute inset-0 flex items-center justify-center"><SyncLoader color="#ffffff" /></div>}
            </div>
        </>
    )
}
export default LazyImage