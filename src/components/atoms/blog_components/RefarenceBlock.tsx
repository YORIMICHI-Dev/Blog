import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { EternalMetaData } from "@/utils/metaData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";


interface Props {
  href: string;
}


const RefarenceBlock = ({ href }: Props) => {
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
            <div className="my-14">
                <Link href={href}>
                    <div className="relative flex flex-row p-6 space-x-4 items-center rounded-lg shadow-lg border-x-2 border-secondBrawn">
                        <div>
                            {metadata.thumbnail && (
                                <Image src={metadata.thumbnail} width={400} height={400} alt="Thumbnail" />
                            )}                    
                        </div>
                        <div className="flex flex-col space-y-4">
                            <span className="text-md md:text-xl font-semibold">Title: {metadata.title}</span>
                            <div className="hidden md:block">
                                <span className="text-md">{metadata.description}</span>                                
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

export default RefarenceBlock;