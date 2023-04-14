const H1 = (props: {children?: React.ReactNode}) => {
    return (
        <div className="relative">
            <h1 className="text-4xl font-semibold my-6">
                {props.children}
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mainBrawn to-thirdBrawn"></div>
        </div>
    );
}

export default H1;