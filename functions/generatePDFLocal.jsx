import PDFDocument from "pdfkit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function generatePDFLocal(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const pdfDoc = new PDFDocument();
            const chunks = [];

            pdfDoc.on("data", (chunk) => chunks.push(chunk));
            pdfDoc.on("end", async () => {
                const pdfBuffer = Buffer.concat(chunks);

                // Upload the PDF buffer to Firebase Cloud Storage
                const pdfRef = ref(storage, `pdfs/${userData.id}.pdf`);
                await uploadBytes(pdfRef, pdfBuffer);

                // Get the download URL of the uploaded PDF
                const downloadURL = await getDownloadURL(pdfRef);

                resolve({ pdfBuffer, downloadURL });
            });

            // Start building the PDF content
            pdfDoc.font("Helvetica");
            pdfDoc.fontSize(12);

            // Add content based on userData
            pdfDoc.fontSize(18).text("Sozialdienst katholischer Frauen e.V.");
            pdfDoc.fontSize(18).text("Kriegkstraße 32-36, 60326 Frankfurt/Main");

            pdfDoc.moveDown();

            pdfDoc.fontSize(18).text("Bestätigung", { font: "Helvetica-Bold" });
            pdfDoc.moveDown();

            pdfDoc
                .fontSize(8)
                .text(
                    "über Geldzuwendungen/Mitgliedsbeitrag im Sinne des § 10 b des Einkommensteuergesetzes an eine der in § 5 Abs. 1 Nr. 9 des Körperschaftssteuergesetzes bezeichneten Körperschaften, Personenvereinigungen oder Vermögensmassen"
                );

            pdfDoc.moveDown();

            pdfDoc.text(userData.name);
            pdfDoc.text(userData.sum);
            pdfDoc.moveDown();

            pdfDoc.text("current Date DD-MM-YYYY");

            pdfDoc.text(
                "Wir sind nach dem letzten uns zugegangenen Steuerbescheid/Freistellungsbescheid des Finanzamtes als gemeinnützig und mildtätigen Zwecken dienend anerkannt und nach § 5 Abs.1 Nr. 9 des Körperschaftsteuergesetzes von der Körperschaftsteuer und nach § 3 Nr. 6 des Gewerbesteuergesetzes von der Gewerbesteuer befreit."
            );

            pdfDoc.text("Bezeichnung des Finanzamts");
            pdfDoc.text("Frankfurt am Main");
            pdfDoc.text("Steuernummer");
            pdfDoc.text("47 250 33178");
            pdfDoc.text("Verzeichnisnummer");
            pdfDoc.text("XIII./001");
            pdfDoc.text("Datum des Bescheides");
            pdfDoc.text("current Date DD-MM-YYYY");

            pdfDoc.text(`Frankfurt, den DATUM`);

            pdfDoc.text("Hinweis:", { font: "Helvetica-Bold" });
            pdfDoc.text(
                "Wer vorsätzlich oder grob fahrlässig eine unrichtige Zuwendungsbestätigung erstellt oder wer veranlasst, dass Zuwendungen nicht zu den in der Zuwendungsbestätigung angegebenen steuerbegünstigten Zwecken verwendet werden, haftet für die entgangene Steuer (§ 10 Abs. 4 EstG, § 9 Abs. 3 KStG, § 9 Nr. 5 GewStG)."
            );

            pdfDoc.text(
                "Diese Bestätigung wird nicht als Nachweis für die steuerliche Berücksichtigung der Zuwendung anerkannt, wenn das Datum des Freistellungsbescheides länger als 5 Jahre bzw. das Datum der Feststellung der Einhaltung der satzungsmäßigen Voraussetzungen nach § 60a Abs. 1 AO länger als 3 Jahre seit Ausstellung des Bescheides zurückliegt (§ 63 Abs. 5 AO)"
            );

            pdfDoc.end();
        } catch (error) {
            console.error("Error generating PDF:", error);
            reject(error);
        }
    });
}
