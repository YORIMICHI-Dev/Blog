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
                <div className="rounded-lg p-6">
                    <div className="shadow-lg">
                        <div className="flex bg-softBlue items-center justify-between rounded-t-lg p-2 space-x-5">
                            <div className="bg-softYellow w-4 h-4 rounded-full"></div>
                            <div className="flex flex-row items-center space-x-4 text-white font-semibold">
                                <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4"/>
                                <span className="text-2xl">Use case</span>                                
                            </div>

                            <div className="bg-softGreen w-4 h-4 rounded-full"></div>
                        </div>
                        <div className="p-10">
                            {caseList.map((caseElement, index) => {

                                return (
                                    <div key={index} className="flex flex-row font-semibold text-xl items-center space-x-3 space-y-2">
                                        {caseElement.check ? <FontAwesomeIcon icon={faCheck} className="md:w-6 md:h-6 w-12 h-12 text-softGreen" />
                                                        : <FontAwesomeIcon icon={faXmark} className="md:w-6 md:h-6 w-12 h-12 text-softRed" />}
                                        <span className="">{caseElement.caseString}</span>
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
