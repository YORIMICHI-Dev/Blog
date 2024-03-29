import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons"

interface Case {
    caseString: string,
    check: boolean,
    }


interface Props {
    conclusionList: Case[]
}


const ConclusionBlock = ({conclusionList}: Props) => {

    return (
        <>
            <div className="flex items-center justify-center md:my-14">
                <div className="rounded-lg md:p-6 p-1 w-full">
                    <div className="shadow-lg">
                        <div className="flex bg-gradationGreen items-center justify-between rounded-t-lg p-2 space-x-5">
                            <div className="bg-softBlue w-4 h-4 rounded-full"></div>
                            <div className="flex flex-row items-center space-x-4 text-white font-semibold">
                                <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6"/>
                                <span className="md:text-2xl text-lg">Conclusion</span>                                
                            </div>

                            <div className="bg-softYellow w-4 h-4 rounded-full"></div>
                        </div>
                        <div className="md:p-10 p-2">
                            {conclusionList.map((conclusionElement, index) => {

                                return (
                                    <div key={index} className="flex items-center md:text-xl md:font-semibold space-x-3 py-2 xl:space-y-4">
                                        <div>
                                            {conclusionElement.check ? <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-softGreen" />
                                                            : <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-softRed" />}                                            
                                        </div>
                                        <div className="">{conclusionElement.caseString}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConclusionBlock;
