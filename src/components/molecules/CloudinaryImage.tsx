import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Options } from '@/utils/cloudinary';


interface Props {
    publicId: string,
    width: number,
    height: number,
    options?: Options,
    className?: string,
    alt?: string
}


const CloudinaryImage = ({ publicId, width, height, options, className = "", alt = "no image" }: Props) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      async function fetchImage() {
        const res = await fetch(
          `/api/cloudinary?publicId=${publicId}&options=${JSON.stringify(options)}`
        );
        const data = await res.json();
        setImageUrl(data.imageUrl);
      }
  
      fetchImage();
    }, [publicId, options]);

    return (
        <>
            <Image src={imageUrl} alt={alt} width={width} height={height} className={className} />
        </>
    )
};

export default CloudinaryImage;