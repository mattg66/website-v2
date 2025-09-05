import { SyncLoader } from "react-spinners"

const MasterLoader: React.FC<{}> = () => (
    <>
        <div className={"absolute z-50 w-auto min-w-full min-h-full max-w-none bg-black flex items-center justify-center h-screen"}>
            <SyncLoader color="#ffffff"/>
        </div>
    </>
)
export default MasterLoader