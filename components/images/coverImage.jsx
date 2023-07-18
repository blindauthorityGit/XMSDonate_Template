import Image from "next/image";

const CoverImage = ({ src, mobileSrc, alt, height, width, position, className, style, aspectRatio }) => {
    return (
        <div
            style={{
                position: position,
                // width: width || "100%",
                // height: height || "100%",
                ...style, // Merge the provided style prop
            }}
            className={className}
        >
            {/* Use mobileSrc prop for mobile devices, and src prop otherwise */}
            {mobileSrc && (
                <Image
                    src={mobileSrc}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="block lg:hidden"
                    style={{ aspectRatio: aspectRatio }} // Apply the custom aspect ratio for mobile
                />
            )}
            {src && (
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="hidden lg:block"
                    style={{ aspectRatio: aspectRatio }} // Apply the custom aspect ratio for desktop
                />
            )}
        </div>
    );
};

export default CoverImage;
