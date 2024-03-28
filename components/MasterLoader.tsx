import { SyncLoader } from "react-spinners"

const MasterLoader: React.FC<{ loading: boolean }> = ({ loading }) => (
    <>
        <div className={"absolute z-50 w-auto min-w-full min-h-full max-w-none bg-black flex items-center justify-center h-screen" + `transition-all duration-1000 ${loading ? "opacity-100" : "opacity-0"}`}>
            <SyncLoader color="#ffffff"/>
        </div>
    </>
)
export default MasterLoader