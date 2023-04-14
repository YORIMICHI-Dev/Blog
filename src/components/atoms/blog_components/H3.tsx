const H3 = (props: {children?: React.ReactNode}) => {
    return (
        <div className="relative my-12">
            <div className="absolute flex flex-row items-center space-x-3 justify-center -top-3 left-0 ">
                <div className="h-3 w-3 bg-secondaryGreen rounded-full"/>                
                <div className="h-2 w-2 bg-secondaryGreen rounded-full"/>
                <div className="h-1 w-1 bg-secondaryGreen rounded-full"/>
            </div>
            <h3 className="text-2xl font-semibold pl-6">{props.children}</h3>                
      </div>
      );
}

export default H3;