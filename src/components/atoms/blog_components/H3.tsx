const H3 = (props: {children?: React.ReactNode}) => {
    return (
        <div className="relative">
            <h3 className="text-xl font-semibold mb-4">
                {props.children}
            </h3>
        </div>
    );
}

export default H3;