import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CloudinaryImage from "@/components/molecules/CloudinaryImage";
import { EternalMetaData } from "@/utils/metaData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

interface Props {
  href: string;
}


const ReferenceBlock = ({ href }: Props) => {
    const [metadata, setMetadata] = useState<EternalMetaData>({
        title: null,
        description: null,
        thumbnail: null,
    });

    const [error, setError] = useState<string | null>(null);

    // 参考先のメタデータを取得
    useEffect(() => {
        (async () => {
        try {
            const response = await fetch(`/api/metaData?url=${encodeURIComponent(href)}`);
            if (!response.ok) {
            const errorText = await response.text();
            setError(`Error fetching metadata (status: ${response.status}): ${errorText}`);
            return;
            }
            const data = await response.json();
            setMetadata(data);
        } catch (error) {
            console.error(`Error fetching metadata: ${(error as Error).message}`);
            setError(`Error fetching metadata: ${(error as Error).message}`);
        }
        })();
    }, [href]);


    return (
        <>
            <div className="md:my-14 my-8 duration-500 hover:opacity-80">
                <Link href={href}>
                    <div className="relative flex flex-row p-6 space-x-4 items-center rounded-lg shadow-lg border-x-2 border-secondBrawn">
                        <div className="w-1/5">
                            {metadata.thumbnail ? <Image src={metadata.thumbnail} width={300} height={200} alt="Thumbnail" />
                                                : <CloudinaryImage publicId={"/blog/pages/404_a5lcee"} width={300} height={200} alt="Thumbnail" />
                            }                    
                        </div>
                        <div className="flex flex-col space-y-4 w-4/5">
                            <span className="md:text-xl font-semibold">
                                Title: {metadata.title && metadata.title.length > 100 ? `${metadata.title.substring(0, 100)}...` : metadata.title}
                            </span>
                            <div className="hidden md:block">
                            {metadata.description && metadata.description.length > 100 ? `${metadata.description.substring(0, 100)}...` : metadata.description}                    
                            </div>
                        </div>
                        <div className="absolute flex flex-row space-x-3 -top-3 left-0 text-center font-semibold text-white bg-secondBrawn px-2 py-1 rounded-lg">
                            <FontAwesomeIcon icon={faBook} className="w-4"/>
                            <span>Reference URL</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ReferenceBlock;