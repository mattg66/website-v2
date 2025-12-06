import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import clsx from "clsx"

const Card: React.FC<{ className?: string, icon?: IconDefinition, title?: string, children?: React.ReactNode }> = ({ children, className, icon, title }) => (
    <>
        <div className={clsx("w-full max-w-sm mx-5 xs:mx-auto my-5", className)}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:shadow-lightBlue/20 hover:-translate-y-1 hover:border-lightBlue/50">
                <div className="p-8">
                    {icon && (
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-lightBlue to-blue-600 flex mx-auto mb-6 shadow-lg">
                            <FontAwesomeIcon icon={icon} className="m-auto text-white" size='3x' />
                        </div>
                    )}
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-white text-center">{title}</h5>
                    <div className="font-normal text-gray-300 leading-relaxed text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
)
export default Card








