const H2 = (props: {children?: React.ReactNode}) => {
    return (
        <>
            <div className="flex items-center my-16">
                <div className="h-12 w-1 bg-gradationBrawnToB mr-4"></div>
                <h1 className="text-4xl font-semibold">{props.children}</h1>
            </div>   
        </>
    );
}

export default H2;