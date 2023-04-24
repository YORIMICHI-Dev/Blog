import Link from "next/link";
import CloudinaryImage from "./CloudinaryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";


const ProfileCard = () => {
    return (
        <div className="w-full bg-white rounded-lg shadow-md">
            <div className="flex flex-col font-bold items-center justify-center space-y-5 text-xl p-3">
                <CloudinaryImage publicId="/blog/pages/card_img_jvhsrj" width={300} height={250} alt="profile" className="rounded-xl" />
                <div className="flex flex-col items-center">
                    <p>YORIMICHI</p>
                    <p className="text-sm text-grayishBlue">Enginner</p>                        
                </div>
            </div>

            <div className="flex flex-col py-5 space-y-10 items-center">
                <p className="">
                    機械学習エンジニアです。<br/>
                    メインはPythonですが、<br />
                    Web系の技術も勉強中です。
                </p>
            </div>

            <div className="flex flex-col space-y-3 p-5">
                <div className="flex flex-row items-center justify-center space-x-3">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                            <FontAwesomeIcon icon={faGithub} className="transition duration-300 hover:scale-110 hover:rotate-6 text-xl w-6" />
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
                            <FontAwesomeIcon icon={faTwitter} className="transition duration-300 hover:scale-110 hover:rotate-6 text-xl w-6" />
                    </Link>
                    <Link href={"/about"}>
                            <FontAwesomeIcon icon={faUserAlt} className="transition duration-300 hover:scale-110 hover:rotate-6 text-xl w-6" />
                    </Link>        
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;