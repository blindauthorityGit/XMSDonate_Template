import Image from "next/image";

const CoverImage = ({ src, alt, height, width, position, className }) => {
    return (
        <div
            style={{
                position: position,
                // width: width || "100%",
                // height: height || "100%",
            }}
            className={className}
        >
            <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
        </div>
    );
};

export default CoverImage;
