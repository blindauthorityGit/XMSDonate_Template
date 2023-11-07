// Step1.jsx
import React from "react";
//TYPO
import { H2, P } from "../../typography";
import { MainButton } from "../../buttons";

//ASSETS
import AsianGirl from "../../../assets/kidsNew.svg";

//CONFIG
import { onboarding } from "../../../config";

//Comps
import { CoverImage } from "../../images";

const Step2 = ({ onNext }) => {
    return (
        <div className="grid grid-cols-12 h-full lg:absolute top-0 left-0 w-full  overflow-y-auto">
            <div className="col-span-12  lg:col-span-6 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
                <CoverImage
                    src={onboarding.step2.imageDesktop.type.src} // Replace with the actual path to your image
                    mobileSrc={onboarding.step2.imageMobile.type.src}
                    alt="Cover Background"
                    position="relative"
                    style={{ aspectRatio: "306 / 269" }}
                    className="z-20 w-auto lg:hidden"
                />
                <div className="mb-6 xl:mb-8"></div>
                {/* <H2 klasse="lg:!text-4xl font-extrabold">{onboarding.step2.headline}</H2> */}
                <div className="mb-6 xl:mb-8"></div>
                {/* <h3>
        <strong> Unterstützen Sie das Familienzentrum Monikahaus</strong>
    </h3> */}
                <div className="mb-4 xl:mb-8"></div>

                <P>
                    <div className="lg:leading-relaxed" dangerouslySetInnerHTML={{ __html: onboarding.step2.text }} />
                </P>
                <div className="mb-4 xl:mb-66"></div>

                {/* <img src={Logo.src} alt="" /> */}
                <div className="mb-4 xl:mb-66"></div>
                <div className="flex justify-end w-full lg:bottom-8 lg:absolute lg:right-8">
                    <MainButton
                        onClick={onNext}
                        klasse="border-2 text-greenColor-50 bg-greenColor mt-4 text-darkText mb-12"
                    >
                        Los geht&apos;s!
                    </MainButton>
                </div>
            </div>
            <div className="col-span-6 hidden lg:block  p-4 lg:pt-24 xl:pt-10 sm:pt-0 lg:p-10">
                <CoverImage
                    src={onboarding.step2.imageDesktop.type.src} // Replace with the actual path to your image
                    mobileSrc={onboarding.step2.imageMobile.type.src}
                    alt="Cover Background"
                    position="relative"
                    style={{ aspectRatio: "1 / 1.5" }}
                    className="z-20 w-auto"
                />
            </div>

            <div className=" text-center font-semibold absolute bottom-8 right-8 ">2 / 2</div>
        </div>
    );
};

export default Step2;

{
    /* <div width=" grid grid-cols-12  h-full absolute top-0 left-0 w-full h-full overflow-y-auto">
    <div className="col-span-12 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
        <CoverImage
            src={onboarding.step2.image.type.src} 
            mobileSrc={onboarding.step2.image.type.src}
            alt="Cover Background"
            position="relative"
            style={{ aspectRatio: "306 / 269" }}
            className="z-20 w-auto"
        />
        <div className="mb-6 xl:mb-8"></div>



        <P>
            <div dangerouslySetInnerHTML={{ __html: onboarding.step2.text }} />
        </P>
        <div className="mb-4 xl:mb-66"></div>

        <div className="mb-4 xl:mb-66"></div>
        <div className="flex justify-end w-full lg:bottom-8 lg:absolute lg:right-8">
            <MainButton onClick={onNext} klasse="border-2 text-greenColor-50 bg-greenColor mt-4 text-darkText mb-12">
                Los geht&apos;s!
            </MainButton>
        </div>
    </div>
    <div className=" text-center font-semibold absolute bottom-8 right-8">2 / 2</div>
</div>; */
}
