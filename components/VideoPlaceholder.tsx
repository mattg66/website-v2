
const VideoPlaceholder: React.FC<{ loading: boolean }> = ({ loading }) => (
    <>
        <div className={"w-auto min-w-full min-h-full max-w-non absolute bg-black z-10 m-0 p-0" + `transition-all duration-1000 ${loading ? "opacity-100" : "opacity-0"}`}/>
    </>
)
export default VideoPlaceholder