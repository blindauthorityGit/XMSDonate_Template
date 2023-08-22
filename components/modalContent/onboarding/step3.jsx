// Step1.jsx
import React from "react";
//TYPO
import { H2, P } from "../../typography";
import { MainButton } from "../../buttons";

//ASSETS
import BaumFull from "../../../assets/baumFull.svg";

const Step3 = ({ onNext }) => {
    return (
        <div width=" grid grid-cols-12  h-full absolute top-0 left-0 w-full h-full overflow-y-auto">
            <div className="col-span-12 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
                <H2>Kleiner Beitrag – große Wirkung</H2>
                <div className="mb-6 xl:mb-8"></div>

                <img src={BaumFull.src} alt="" />
                <div className="mb-4 xl:mb-8"></div>

                <P>
                    Werden Sie Teil unserer besonderen Spendenaktion: Mit jeder Spende haben Sie die Möglichkeit, sich
                    auf unserem Spendenweihnachtsbaum zu verewigen. Hinterlegen Sie Ihre Daten bei einer symbolischen
                    Kugel oder spenden Sie einfach anonym.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P klasse="font-bold">
                    Jede Spende geht direkt an das Familienzentrum Monikahaus, das von Sozialdienst katholischer Frauen
                    e.V., Ortsverein Frankfurt, getragen wird. Damit unterstützen Sie unsere Arbeit und schenken unseren
                    Kindern und Jugendlichen mehr Teilhabe am gesellschaftlichen Leben und damit eine bessere Zukunft.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P klasse="font-bold">Machen Sie mit! Jeder Beitrag zählt! </P>
                {/* <img src={Logo.src} alt="" /> */}
                <div className="mb-4 xl:mb-66"></div>
                <div className="flex justify-end w-full mb-12">
                    <MainButton onClick={onNext} klasse="border-2 text-greenColor-50 bg-greenColor mt-4 text-darkText">
                        Los geht&apos;s!
                    </MainButton>
                </div>
            </div>
            <div className=" text-center font-semibold absolute bottom-8 right-8">3 / 3</div>
        </div>
    );
};

export default Step3;
