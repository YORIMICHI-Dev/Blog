import React from "react";


interface MainProps {
    children: React.ReactNode
}


const Main = ({children}: MainProps) => {
    return (
        <main className="container mx-auto my-7 mb-auto">{children}</main>
    );
}

export default Main;