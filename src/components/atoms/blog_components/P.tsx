const P = (props: {children?: React.ReactNode}) => {
    return (
        <h3 className="text-xl font-semibold mb-4">
            {props.children}
        </h3>
    );
}

export default P;