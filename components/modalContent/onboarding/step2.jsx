// Step1.jsx
import React from "react";
//TYPO
import { H2, P } from "../../typography";
import { MainButton } from "../../buttons";
const Step2 = ({ onNext }) => {
    return (
        <div width=" grid grid-cols-12  h-full absolute top-0 left-0 w-full h-full overflow-y-auto">
            <div className="col-span-12 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
                <H2>Kleiner Beitrag – große Wirkung</H2>
                <div className="mb-6 xl:mb-8"></div>
                <h3>
                    <strong> Unterstützen Sie das Familienzentrum Monikahaus</strong>
                </h3>
                <div className="mb-4 xl:mb-8"></div>

                <P>
                    Lassen Sie die Wünsche unserer Kinder und Jugendlichen wahr werden, indem Sie eine Spende Ihrer Wahl
                    tätigen und damit eine symbolische Kugel für unseren Weihnachtsbaum erwerben. Mit Ihrer Spende
                    finanzieren wir große und kleine Wünsche unserer Kinder und Jugendlichen wie beispielsweise
                    Schwimmkurse, Fußball und Tanz AG, Reittherapie, Ausflüge in den Kletterwald, in den Freizeitpark,
                    ins Kino etc., Ferienfreizeiten sowie die Anschaffung von Spielsachen und Spielgeräten für den
                    Außenbereich.
                </P>
                <div className="mb-4 xl:mb-66"></div>

                {/* <img src={Logo.src} alt="" /> */}
                <MainButton onClick={onNext} klasse="border-2 mt-4 text-darkText">
                    Weiter
                </MainButton>
            </div>
        </div>
    );
};

export default Step2;
