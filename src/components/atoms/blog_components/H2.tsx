const H2 = (props: {children?: React.ReactNode}) => {
    return (
            <h2 className="text-3xl font-semibold mb-4">
                {props.children}
            </h2>
    );
}

export default H2;