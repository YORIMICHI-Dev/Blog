import Image from "next/image";

interface Props {
    imgSrc: string
}


const ImageBlock = ({imgSrc}: Props) => {
    
    return (
        <div className="flex flex-row justify-center my-10 rounded-lg shadow-lg">
            <Image src={imgSrc} width={1000} height={750} alt="image" className="rounded-lg"/>
        </div>
    );
}

export default ImageBlock;