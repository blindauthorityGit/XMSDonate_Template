// Import the SVG images from your assets folder
import Bob from "../assets/bob.svg";
import Jessy from "../assets/jessy.svg";
import Mika from "../assets/mika.svg";
import Jerome from "../assets/jerome.svg";

// Define the array of images
const avatars = [Bob, Jessy, Mika, Jerome];

const colors = {
    background: "#fff",
    primaryColor: "#7d866f",
    bgColors: ["#F4B942", "#1B2845", "#EF709D", "#D11149", "#CBBE90"],
    kugeln: [
        {
            kugel1: "#EB4511",
        },
        {
            kugel2: "#DCDFDC",
        },
        {
            kugel3: "#000000",
        },
        {
            kugel4: "#fff",
        },
    ],
    baum: "#04151F",
};

const bgColors = ["#033F63", "#AF4D98", "#FF4A1C", "#CC3363", "#000000"];

const startInfo = {
    headline: "UNSERE JUGEND - UNSERE ZUKUNFT",
    subline:
        "Gemeinsam machen wir den Wald wieder grün. Ihr seid großartig! Das Klima kann nicht warten, und jeder kleine Schritt ist eine große Heldentat.",
    buttonText: "Jetzt spenden",
};
const stepsInfo = {
    ballChoice: {
        headline: "Schenken Sie Hoffnung!",
        text: "Wählen Sie die Farbe Ihrer Kugel, die Ihre Spende repräsentieren soll.",
    },
    sum: {
        headline: "Spendensumme",
        text: "Ihre Spende hilft uns, unsere Arbeit weiterführen zu können. Mit welchem Betrag möchten Sie unsere Arbeit unterstützen?",
    },
    anonymus: {
        headline: "Anonyme Spende?",
        text: "Wir möchten sicherstellen, dass Sie sich wohl fühlen. Möchten Sie Ihre Spende anonym tätigen oder Ihre Daten mit uns teilen?",
    },
    name: {
        headline: "Ihr Name",
        text: "Nennen Sie uns Ihren Namen. Dieser wird dann auf Ihrer Spendenkugel angezeigt.",
    },
    avatar: {
        headline: "Ihr Bild",
        text: "Wenn Sie möchten, können Sie Ihren Beitrag noch persönlicher gestalten. Stellen Sie uns ein Bild zur Verfügung, das neben Ihrem Namen erscheint (optional, max. 5 MB).",
    },
    comment: {
        headline: "Ihr Kommentar",
        text: "Gerne können Sie auch einen Kommentar abgeben (optional, max. 60 Zeichen).",
    },
    dragBall: {
        headline: "Schmücken Sie den Baum",
        text: "Nun können Sie Ihre Kugel auf ein freies Feld bewegen. Wo möchten Sie die Kugel hinziehen?",
    },
};

const anzahlRows = 14;
const anzahlBaumKugeln = 75;

//BAUMSTUMPF HÖHE % (Baumstumpf / gesamthöhe)
const baumstumpfHeight = 0.157;

const showGoal = false;
const goalSum = 5000;
const goalStep = 5000;

// IMAGES
const maxSize = 5; // in MB

const dev = false;
const local = false;

export {
    colors,
    goalStep,
    baumstumpfHeight,
    anzahlRows,
    startInfo,
    goalSum,
    showGoal,
    dev,
    anzahlBaumKugeln,
    local,
    maxSize,
    bgColors,
    avatars,
    stepsInfo,
};
