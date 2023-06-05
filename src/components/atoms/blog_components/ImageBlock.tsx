import CloudinaryImage from "@/components/molecules/CloudinaryImage";

interface Props {
    imgSrc: string
    width?: number
    height?: number
}


const ImageBlock = ({imgSrc, width, height}: Props) => {
    if (width === undefined) {
        width = 1000
    }
    if (height === undefined) {
        height = 750
    }
    return (
        <div className="flex flex-row justify-center md:my-10 my-6 rounded-lg shadow-lg">
            <CloudinaryImage publicId={imgSrc} width={width} height={height} alt="image" className="rounded-lg"/>
        </div>
    );
}

export default ImageBlock;