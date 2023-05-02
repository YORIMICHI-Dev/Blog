import { faGraduationCap, faIndustry, faBriefcaseClock } from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Histroy {
    icon: IconDefinition
    title: string,
    period: string,
    context: string,
    skill: string,
}


const histories: Histroy[] = [
    {
        icon: faGraduationCap,
        title: "電気通信大学大学院 修士",
        period: "2017/04~2019/03",
        context: "塑性加工（曲げ加工）について研究",
        skill: "塑性加工, 有限要素法解析"
    },
    {
        icon: faIndustry,
        title: "住友電気工業株式会社",
        period: "2019/04~2021/08",
        context: "研削加工工具の開発・生産技術",
        skill: "研削加工, 電気めっき"
    },
    {
        icon: faBriefcaseClock,
        title: "株式会社iPX",
        period: "2022/02~2023/02",
        context: "AGVシミュレーターの開発",
        skill: "Python, C++, Ubuntu, 画像分類"
    },
    {
        icon: faBriefcaseClock,
        title: "ラニアケア株式会社",
        period: "2023/03~",
        context: "Webアプリ受託開発・保守",
        skill: "Python, Django, Ubuntu, AWS, 画像分類"
    },
]


const HistoryBlock = () => {

    return (
        <div className="container p-6 mx-auto flex flex-wrap items-center justify-center">
            {histories.map((history, index) => {
                return (
                    <div key={index} className={`flex relative pb-20 items-center w-full md:w-2/3 mx-auto ${index === 0 && "pt-10"}`}>

                        <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center 
                                        bg-secondaryGreen text-white relative z-10 title-font font-medium">
                            {index + 1}
                        </div>
                        <div className="flex-grow md:pl-8 pl-6 flex items-center flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-20 h-20 bg-secondaryGreen rounded-full inline-flex items-center justify-center">
                                <FontAwesomeIcon className="w-10 h-10 text-white" icon={history.icon} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 space-y-2">
                                <h2 className="font-medium title-font text-grayishBlue mb-1 text-sm">{history.period}</h2>
                                <h2 className="font-medium title-font b-1 text-xl">{history.title}</h2>
                                <p className="text-grayishBlue md:text-xl">{history.context}</p>
                                <p className="text-grayishBlue text-sm">skill: {history.skill}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default HistoryBlock;