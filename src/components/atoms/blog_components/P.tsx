const P = (props: {children?: React.ReactNode}) => {
    return (
        <p className="text-xl my-4 leading-10 text-grayishBlue">
            {props.children}
        </p>
    );
}

export default P;