// Step1.jsx
import React from "react";
//TYPO
import { H2, P } from "../../typography";
import { MainButton } from "../../buttons";

import Logo from "../../../assets/logo.png";
const Step1 = ({ onNext }) => {
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
                    In unserem Familienzentrum Monikahaus in Frankfurt am Main bieten wir unter einem Dach vielfältige,
                    integrierte und miteinander vernetzte Hilfen für Familien an. Jeder Ratsuchende erhält so eine
                    bedarfsorientierte und passgenaue Unterstützung. „Schritt für Schritt Hand in Hand“ auf der
                    Grundlage einer vertrauensvollen Beziehung begleiten wir Familien in ihrem Leben. Unser Angebot
                    reicht von Schwangerschaftsberatung und Frühen Hilfen über Kita, stationäre Wohngruppen und
                    teilstationäre Tagesgruppen für Kinder und Jugendliche bis hin zu Ambulanten Hilfen,
                    Monikahausschule und Erweiterten Schulischen Betreuung.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Machen Sie mit bei unserer Spendenaktion und unterstützen Sie das Familienzentrum Monikahaus dabei,
                    unseren Kindern und Jugendlichen eine bessere Perspektive zu bieten.{" "}
                </P>
                <div className="mb-4 xl:mb-66"></div>

                {/* <img src={Logo.src} alt="" /> */}
                <MainButton onClick={onNext} klasse="border-2 mt-4 text-darkText">
                    Weiter
                </MainButton>
            </div>
        </div>
        // <div>
        //     <h2>Step 1</h2>
        //     <p>Content for Step 1</p>
        //     <button onClick={onNext}>Next</button>
        // </div>
    );
};

export default Step1;
