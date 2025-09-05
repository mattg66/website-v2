const HorizontalDivider: React.FC<{ className?: string }> = ({ children, className }) => (
    <>
        <div className={"w-100 h-25 flex " + className}>
            <div className="container m-auto text-center">
                {children}
            </div>
        </div>
    </>
)
export default HorizontalDivider