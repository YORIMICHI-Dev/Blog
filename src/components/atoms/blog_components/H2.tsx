const H2 = (props: {children?: React.ReactNode}) => {
    return (
        <>
            <div className="flex items-center md:my-20 my-16">
                <div className="h-12 w-1 bg-gradationBrawnToB mr-4"></div>
                <h1 className="md:text-3xl text-xl  font-semibold">{props.children}</h1>
            </div>   
        </>
    );
}

export default H2;