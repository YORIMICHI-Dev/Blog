import React from "react";
import Sidebar from "./Sidebar";

interface MainProps {
    children: React.ReactNode
}


const MainWithSidebar = ({children}: MainProps) => {
    return (
        <main className="container mx-auto my-7 mb-auto">
            {/* mainとsidebar */}
            <div className='flex justify-between lg:space-x-10'>
                {/* main */}
                <div className='lg:w-3/4 w-full'>
                    {children}
                </div>
                {/* sidebar */}
                <div className='lg:w-1/4 w-full hidden lg:block'>
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}

export default MainWithSidebar;