import React, { forwardRef, useEffect } from "react";
import Image from "next/image"; // Import the Image component

// ASSETS
import Avatar from "../../assets/avatar.svg";

const ToolTip = (props) => {
    return (
        <div
            onMouseLeave={props.onMouseLeave}
            className={`tooltip font-sans transition-all duration-200 z-[51] ${props.klasse}`}
            style={props.style}
        >
            {props.avatrSrc ? (
                <div className="grid grid-cols-12 items-center relative z-50">
                    <div className="col-span-3 lg:col-span-3 xl:col-span-3 h-full">
                        <div className="avatar w-8 h-8 sm:w-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12">
                            {props.isAnonymus || !props.avatrSrc ? (
                                <div className="text-3xl md:text-4xl">
                                    <Image src={Avatar} alt="Avatar" width={64} height={64} />
                                </div>
                            ) : (
                                <div className="w-full h-full relative">
                                    <div
                                        onClick={props.onClickAvatar}
                                        className="avatar text-3xl md:text-4xl w-full h-full relative  rounded-full bg-cover bg-center"
                                        style={{
                                            aspectRatio: "1/1",
                                        }}
                                    >
                                        <Image
                                            src={props.avatrSrc}
                                            alt="avtrImg"
                                            // width={128}
                                            // height={128}
                                            objectFit={"cover"}
                                            placeholder="blur"
                                            blurDataURL={Avatar.src}
                                            fill={true}
                                            className="rounded-full relative h-full w-full " // To apply rounded corners
                                            style={
                                                {
                                                    // aspectRatio: "1/1",
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-9 sm:col-span-8 xl:col-span-9 pl-4 lg:pl-4 text-xs sm:text-base lg:text-xs xl:text-base">
                        <div className="font-rucksack  font-bold">
                            {props.isAnonymus ? "Anonymer Spender" : props.name}
                        </div>
                        <div className="font-normal">
                            {" "}
                            {props.sum.toLocaleString("de-DE", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}{" "}
                            Euro
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-12 items-center relative">
                    <div className="col-span-3 lg:col-span-3 xl:col-span-3 h-full">
                        <div className="avatar w-8 h-8 sm:w-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12">
                            <div className="text-3xl md:text-4xl">
                                <Image src={Avatar} alt="Avatar" width={64} height={64} />
                                {/* Use the Image component */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9 sm:col-span-8 xl:col-span-9 pl-4 lg:pl-4 text-xs sm:text-base lg:text-xs xl:text-base">
                        <div className="font-rucksack  font-bold">
                            {props.isAnonymus ? "Anonymer Spender" : props.name}
                        </div>{" "}
                        <div className="font-normal">
                            {" "}
                            {props.sum.toLocaleString("de-DE", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}{" "}
                            Euro
                        </div>
                    </div>
                </div>
            )}

            {props.comment && (
                <div className="mt-3 lg:mt-3 text-xs md:text-base lg:text-xs xl:text-sm italic font-light">
                    {props.comment}
                </div>
            )}
        </div>
    );
};

export default forwardRef(ToolTip);
