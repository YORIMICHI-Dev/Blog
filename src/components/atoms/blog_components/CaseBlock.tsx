import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons"

interface Case {
    caseString: string,
    check: boolean,
    }


interface Props {
    caseList: Case[]
}


const CaseBlock = ({caseList}: Props) => {

    return (
        <>
            <div className="flex items-center justify-center my-14">
                <div className="rounded-lg md:p-6 p-1 w-full">
                    <div className="shadow-lg">
                        <div className="flex bg-gradationBlue items-center justify-between rounded-t-lg p-2 space-x-5">
                            <div className="bg-softYellow w-4 h-4 rounded-full"></div>
                            <div className="flex flex-row items-center space-x-4 text-white font-semibold">
                                <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4"/>
                                <span className="md:text-2xl text-lg">Use case</span>                                
                            </div>

                            <div className="bg-softGreen w-4 h-4 rounded-full"></div>
                        </div>
                        <div className="md:p-10 p-2">
                            {caseList.map((caseElement, index) => {
                                return (
                                    <div key={index} className="flex items-center md:text-xl md:font-semibold space-x-3 py-2 xl:space-y-4">
                                        <div>
                                            {caseElement.check ? <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-softGreen" />
                                                            : <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-softRed" />}                                            
                                        </div>
                                        <div className="">{caseElement.caseString}</div>
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

export default CaseBlock;
