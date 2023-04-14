const Li = (props: {children?: React.ReactNode}) => {
    return (
        <li className="text-xl font-semibold my-4">{props.children}</li>   
    );
}

export default Li;
