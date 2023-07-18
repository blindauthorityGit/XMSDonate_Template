import React from "react";

// COMPS
import { MainButton } from "../buttons";
import { H1, H2, H3 } from "../typography";
import { P } from "../typography";

const StartText = () => {
    return (
        <div className="absolute lg:static bottom-8 lg:bottom-auto w-full">
            <H1 klasse="hidden lg:block">Schmücken Sie den Baum</H1>
            <P klasse="text-xl font-semibold tracking-wide hidden lg:block">
                Wir sammeln Spenden für die Kinder und Jugendlichen des Familienzentrums Monikahaus.
            </P>
            <MainButton klasse={"bg-primaryColor hover:bg-primaryColor-950 mt-8"}>Jetzt Spenden</MainButton>
        </div>
    );
};

export default StartText;
