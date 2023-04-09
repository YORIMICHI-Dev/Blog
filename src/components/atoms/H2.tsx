interface Props {
    children: string
}

const H2 = ({children}: Props) => {
    return (
        <div className="relative">
            <h1 className="text-4xl font-semibold mb-4">
                {children}
            </h1>
            {/* 下線の色が2:8の場合
            <div className="absolute bottom-0 left-0 w-full h-1 flex">
                <div className="h-full w-1/5 bg-mainBrawn"></div>
                <div className="h-full w-4/5 bg-thirdBrawn"></div>
            </div> */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mainBrawn to-thirdBrawn"></div>
        </div>
    );
}

export default H2;