// S3に保存している画像を取得する
// ルート: S3Image.tsx -> api/s3.ts -> utils/s3.ts -> AWS S3 Bucket

import Image from "next/image";

interface S3ImageProps {
    s3Key: string;
    alt: string;
    width: number;
    height: number;
}
  
const S3Image = ({ s3Key, width, height } : S3ImageProps) => {
    const imageUrl = `/api/s3?key=${encodeURIComponent(s3Key)}`;

    return (
		<>
			<Image src={imageUrl} alt={"no image"} width={width} height={height} />;
		</>
	)
};
  
export default S3Image;