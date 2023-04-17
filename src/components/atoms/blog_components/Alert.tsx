import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface AlertProps {
    children: React.ReactNode
    mark: string
}


const Alert = ({children, mark}: AlertProps) => {
    return (
        <div className={`flex flex-row space-x-3 my-10 items-center p-3 rounded-xl border-2 ${mark === "check" ? "border-softGreen" : "border-softRed"}`}>
            <div className="">
                {mark === "check" ? <FontAwesomeIcon icon={faCheckCircle} className="w-6 text-softGreen" />
                                  : <FontAwesomeIcon icon={faInfoCircle} className="w-6 text-softRed" />}
            </div>
            <p className="text-md">{children}</p>
        </div>
    );
}

export default Alert;