import React from "react";
//TYPO
import { H2, P } from "../../typography";

import Logo from "../../../assets/logoBlue.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-12 relative h-full bg-white">
            <div className="col-span-12 p-4 lg:pt-4 xl:pt-10 sm:pt-4 lg:p-10 bg-white">
                <H2>Unsere Jugend - Unsere Zukunft 🌱🌟</H2>
                <P>Hallo, liebe Umweltfreunde!</P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Bei den Klimahelden steht unsere junge Generation im Mittelpunkt. Unsere Erde verändert sich
                    aufgrund menschlicher Aktivitäten, was sich auf die Zukunft unserer Kinder auswirkt. Doch keine
                    Sorge, gemeinsam können wir etwas dagegen tun!
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Mit unseren spannenden Lernabenteuern und Baum-Pflanz-Partys möchten wir jungen Menschen die
                    Bedeutung des Umweltschutzes näherbringen. Gemeinsam können wir dazu beitragen, dass unser Planet
                    gesund bleibt, selbst wenn wir noch klein sind.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Zweimal im Jahr kommen wir in Aschaffenburg zusammen, um Bäume zu pflanzen und die Natur zu
                    schützen. Doch dafür benötigen wir eure Hilfe! Nur gemeinsam können wir unsere Stadt noch grüner und
                    lebenswerter machen. Aktuelle Informationen zu unseren Aktionen findet ihr immer auf unserer
                    Website:{" "}
                    <a className="text-blue-500 underline" href="https://klimahelden.org">
                        Klick hier für Aktuelles
                    </a>
                    .
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Wir setzen nicht nur auf Worte, sondern auf konkrete Taten. In Zusammenarbeit mit Experten arbeiten
                    wir daran, geschädigte Naturschutzgebiete wiederherzustellen – als wäre es Zauberei! 🪄
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Unsere Abenteuer und Aktivitäten sind stets auf dem neuesten Stand der Wissenschaft, sodass wir den
                    Klimawandel besser verstehen und dagegen ankämpfen können.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Wir sind überzeugt, dass unsere Jugend die Macht hat, die Welt zu verändern. Gemeinsam möchten wir
                    die Natur schützen und eine bessere Zukunft gestalten! 💪
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Gemeinsam mit Politikern, anderen Umweltfreunden und Unternehmen bilden wir ein starkes Team, um dem
                    weltweiten Waldverlust entgegenzuwirken.
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    Ihr seid großartig! Das Klima kann nicht länger warten, und jeder kleine Schritt ist eine große
                    Heldentat. Wenn ihr uns kontaktiert, finden wir gemeinsam einen Weg, wie auch ihr zu Umweltschützern
                    werden könnt. 🌍💚
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>Gemeinsam sind wir stark! 🌏💪</P> <div className="mb-4 xl:mb-66"></div>
                <P>
                    <span className="font-bold">Plant for the Planet Aschaffenburg e.V.</span>
                    <br />
                    Vorstand: Vanessa Weber
                    <br />
                    Benzstraße 4,<br></br>
                    63741 Aschaffenburg
                    <br></br>
                    <br></br>
                    <a
                        className="font-semibold underline hover:opacity-70"
                        href="https://klimahelden.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        klimahelden.org
                    </a>
                    <br></br>
                    <a className="font-semibold underline hover:opacity-70" href="mailto: V.Weber@werkzeugeweber.de">
                        V.Weber@werkzeugeweber.de
                    </a>
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    <span className="font-bold">Bankverbindung</span>
                    <br />
                    Plant for the Planet Aschaffenburg e.V.<br></br>
                    IBAN: DE 56 7955 0000 0012 2368 16
                    <br />
                    BIC: BYLADEM1ASA
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    <span className="font-bold">Design & Umsetzung</span>
                    <br />
                    <a
                        className="font-semibold underline hover:opacity-70"
                        href="https://www.sabocon.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sabocon GmbH
                    </a>
                </P>
                <div className="mb-4 xl:mb-66"></div>
                <P>
                    <span className="font-bold">Interessiert am einem eigenen Spendensystem?</span>
                    <br />
                    <a
                        className="font-semibold underline hover:opacity-70"
                        href="https://www.xmsdonate.de"
                        target="_blank"
                        rel="noreferrer"
                    >
                        XMS donate
                    </a>
                </P>
                <img src={Logo.src} className="mt-6" alt="" />
            </div>
        </div>
    );
};

export default Info;
