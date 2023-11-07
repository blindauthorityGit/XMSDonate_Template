// Import the SVG images from your assets folder
import Bob from "../assets/bob.svg";
import Jessy from "../assets/jessy.svg";
import Mika from "../assets/mika.svg";
import Jerome from "../assets/jerome.svg";

//ASSETS
import Step1Desktop from "../assets/step1Desktop.jpg";
import Step1Mobile from "../assets/step1Mobile.jpg";
import Step2Desktop from "../assets/step2Desktop.jpg";
import Step2Mobile from "../assets/step2Mobile.jpg";

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

const onboarding = {
    step1: {
        headline: "Hallo, liebe Umweltfreunde!",
        text: "<p>Wir bitten um Deine Spende, damit unsere Kinder auch in Zukunft unsere Zukunft selbst in die Hand nehmen können.</p><br/> <p> Mit deiner Spende sorgst du dafür, dass wir unsere Arbeit für die Zukunft unserer Jugend noch erfolgreicher fortsetzen können. Der Kern all unserer Bemühungen bei Klimahelden zielt auf unseren Nachwuchs ab. Die Generation unserer Jugend wird in den kommenden Jahrzehnten wie keine zuvor unter den Folgen des menschengemachten Klimawandels leiden.</p><br/>",
        imageDesktop: <Step1Desktop />,
        imageMobile: <Step1Mobile></Step1Mobile>,
    },
    step2: {
        headline: "Hallo, liebe Umweltfreunde!",
        text: "<p> Mit unseren Akademien oder Baumpflanzaktionen zeigen wir unseren Jüngsten, welchen Beitrag sie selbst leisten können, und dass auch deine Handlungen einen Beitrag zur Zukunft unseres Planeten darstellen.</p><br/> <p> Und in diesem Jahr haben wir uns etwas ganz Besonderes überlegt! Auf dieser Seite findest du unseren virtuellen Spendenweihnachtsbaum, den du mit deiner Spende direkt schmücken kannst. Du kannst dabei die Spendensumme frei wählen und einer Weihnachtskugel frei zuordnen und auf dem Weihnachtsbaum positionieren. Dabei kannst du deine Spende mit einem Wunsch oder Kommentar versehen und auch deinen Namen und sogar ein Bild oder Logo hinterlassen.</p><br/> <p> <strong> Wir danken dir jetzt schon für deine großzügige Spende und wünschen dir eine schöne Weihnachtszeit. </strong></p><br/> <br/> klimahelden.org",
        imageDesktop: <Step2Desktop />,
        imageMobile: <Step2Mobile></Step2Mobile>,
    },
};

const startInfo = {
    headline: "UNSERE JUGEND - UNSERE ZUKUNFT",
    subline:
        "Gemeinsam machen wir den Wald wieder grün.<br/> Ihr seid großartig! Das Klima kann nicht warten, und jeder kleine Schritt ist eine große Heldentat.",
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

export {
    colors,
    goalStep,
    baumstumpfHeight,
    anzahlRows,
    startInfo,
    goalSum,
    showGoal,
    anzahlBaumKugeln,
    maxSize,
    bgColors,
    avatars,
    stepsInfo,
    onboarding,
};
