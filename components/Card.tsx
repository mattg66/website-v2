import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import clsx from "clsx"

const Card: React.FC<{ className?: string, icon?: IconDefinition, title?: string }> = ({ children, className, icon, title }) => (
    <>
        <div className={clsx("max-w-xs xs:w-64 mx-5 xs:mx-auto my-5", className)}>
            <div className="bg-gray-800 rounded-lg border border-lightBlue shadow-md h-full">
                <div className="w-40 h-40 rounded-full bg-white flex mx-auto my-5">
                    {icon ? <FontAwesomeIcon icon={icon} className="m-auto" size='5x' /> : null}

                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                    <div className="mb-3 font-normal text-gray-400">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
)
export default Card








