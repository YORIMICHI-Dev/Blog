import Link from "next/link";


interface PagiNationProps {
    currentPage: number;
    numPages: number;
}


const PageNation = ({currentPage, numPages}: PagiNationProps) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    if (numPages === 1) return <></>


    return (
        <div className="mt-6 flex justify-center">
            <ul className="flex list-none my-2 space-x-2">
                {!isFirst && (
                    <Link href={prevPage}>
                        <li className="relative block py-2 px-3 leading-tight bg-white border-2 border-secondBrawn duration-300
                                     hover:text-white hover:bg-secondBrawn cursor-pointer rounded-lg " >
                                        Previous
                        </li>
                    </Link>
                )}

                {Array.from({length: numPages}, (_, i) => (
                    <Link key={i} href={`/blog/page/${i + 1}`}>
                        {currentPage === (i + 1) 
                        ?<li className="relative block py-2 px-3 leading-tight border-2 border-secondBrawn 
                                     text-white bg-secondBrawn cursor-pointer rounded-lg " >
                            {i + 1}
                        </li>
                        :<li className="relative block py-2 px-3 leading-tight bg-white border-2 border-secondBrawn duration-300
                        hover:text-white hover:bg-secondBrawn cursor-pointer rounded-lg " >
                           {i + 1}
                        </li>}
                    </Link>
                ))}

                {!isLast && (
                    <Link href={nextPage}>
                        <li className="relative block py-2 px-3 leading-tight bg-white border-2 border-secondBrawn duration-300
                                     hover:text-white hover:bg-secondBrawn cursor-pointer rounded-lg " >
                                        Next
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    );
}

export default PageNation;