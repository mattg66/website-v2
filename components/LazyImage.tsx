import Image, { ImageProps } from "next/image"
import { useState } from "react"
import { SyncLoader } from "react-spinners"

type LazyImageProps = ImageProps & {
    aspectRatio?: number
}

const LazyImage = ({ aspectRatio, ...props }: LazyImageProps) => {
    const [isLoading, setLoading] = useState(true)

    // Calculate aspect ratio from width/height if provided, or use custom aspectRatio prop
    const ratio = aspectRatio || (props.width && props.height ? Number(props.height) / Number(props.width) : 1)

    return (
        <div className="relative w-full" style={{ paddingBottom: `${ratio * 100}%` }}>
            <Image
                {...props}
                loading="lazy"
                fill
                sizes={props.sizes || "100vw"}
                style={{ objectFit: 'contain' }}
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setLoading(false)}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <SyncLoader color="#ffffff" />
                </div>
            )}
        </div>
    )
}
export default LazyImage