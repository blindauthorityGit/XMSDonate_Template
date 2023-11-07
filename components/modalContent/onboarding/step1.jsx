// Step1.jsx
import React, { useEffect } from "react";
//TYPO
import { H2, P } from "../../typography";
import { MainButton } from "../../buttons";

//CONFIG
import { onboarding } from "../../../config";

//Comps
import { CoverImage } from "../../images";

import Logo from "../../../assets/logoFull.svg";

const Step1 = ({ onNext }) => {
    useEffect(() => {}, []);

    return (
        <div className="grid grid-cols-12 h-full lg:absolute top-0 left-0 w-full  overflow-y-auto">
            <div className="col-span-12  lg:col-span-6 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
                <CoverImage
                    src={onboarding.step1.imageDesktop.type.src} // Replace with the actual path to your image
                    mobileSrc={onboarding.step1.imageMobile.type.src}
                    alt="Cover Background"
                    position="relative"
                    style={{ aspectRatio: "306 / 269" }}
                    className="z-20 w-auto lg:hidden"
                />
                <div className="mb-6 xl:mb-8"></div>
                <H2 klasse="lg:!text-4xl font-extrabold">{onboarding.step1.headline}</H2>
                <div className="mb-6 xl:mb-8"></div>
                {/* <h3>
                    <strong> Unterstützen Sie das Familienzentrum Monikahaus</strong>
                </h3> */}
                <div className="mb-4 xl:mb-8"></div>

                <P>
                    <div className="lg:leading-relaxed" dangerouslySetInnerHTML={{ __html: onboarding.step1.text }} />
                </P>
                <div className="mb-4 xl:mb-66"></div>

                {/* <img src={Logo.src} alt="" /> */}
                <div className="mb-4 xl:mb-66"></div>
                <div className="flex justify-end w-full lg:bottom-8 lg:absolute lg:right-8">
                    <MainButton onClick={onNext} klasse="border-2 mt-4 text-darkText mb-12">
                        Weiter
                    </MainButton>
                </div>
            </div>
            <div className="col-span-6 hidden lg:block  p-4 lg:pt-24 xl:pt-10 sm:pt-0 lg:p-10">
                <CoverImage
                    src={onboarding.step1.imageDesktop.type.src} // Replace with the actual path to your image
                    mobileSrc={onboarding.step1.imageMobile.type.src}
                    alt="Cover Background"
                    position="relative"
                    style={{ aspectRatio: "1 / 1.5" }}
                    className="z-20 w-auto"
                />
            </div>

            <div className=" text-center font-semibold absolute bottom-8 right-8 ">1 / 2</div>
        </div>
        // <div>
        //     <h2>Step 1</h2>
        //     <p>Content for Step 1</p>
        //     <button onClick={onNext}>Next</button>
        // </div>
    );
};

export default Step1;
