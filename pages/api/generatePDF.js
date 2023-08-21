// import fs from "fs";
// import PDFDocument from "pdfkit";

// export async function generatePDF(userData) {
//     try {
//         const pdfDoc = new PDFDocument();
//         const pdfPath = "quittung.pdf";
//         pdfDoc.pipe(fs.createWriteStream(pdfPath));

//         // Add content based on userData
//         pdfDoc.text(`Receipt for ${userData.name}`);
//         pdfDoc.text(`Amount: ${userData.sum}`);
//         // Add more content as needed

//         pdfDoc.end();
//         return pdfPath; // Return the generated PDF path
//     } catch (error) {
//         console.error("Error generating PDF:", error);
//         throw error;
//     }
// }

import { storage } from "../../config/firebase"; // Import your Firebase Storage instance
import PDFDocument from "pdfkit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function generatePDF(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const pdfDoc = new PDFDocument();
            const chunks = [];

            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, "0");
            const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
            const year = currentDate.getFullYear();

            const formattedDate = `${day}.${month}.${year}`;

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
            // pdfDoc.image("/skfLogoSmall.jpg", 0, 15, { width: 300 })

            pdfDoc.moveDown();

            // Add logo image using pdfDoc.image(imagePath, x, y, { width, height });
            pdfDoc.fontSize(18).text("Bestätigung", { font: "Helvetica-Bold" });
            pdfDoc.moveDown();

            pdfDoc
                .fontSize(8)
                .text(
                    "über Geldzuwendungen/Mitgliedsbeitrag im Sinne des § 10 b des Einkommensteuergesetzes an eine der in § 5 Abs. 1 Nr. 9 des Körperschaftssteuergesetzes bezeichneten Körperschaften, Personenvereinigungen oder Vermögensmassen"
                );
            // Add table using pdfDoc.table(table, x, y, options);
            pdfDoc.moveDown();
            pdfDoc.moveDown();
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text(userData.name, { underline: true });
            pdfDoc.fontSize(6).text("Name des Zuwendenden");
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text("EUR " + userData.sum + ",-", { underline: true });
            pdfDoc.fontSize(6).text("Betrag der Zuwendung in EURO");
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text(formattedDate);
            pdfDoc.fontSize(6).text("Tag der Zuwendung");

            pdfDoc.moveDown();
            pdfDoc.moveDown();

            pdfDoc.fontSize(10).text("Es handelt sich um den Verzicht auf Erstattung von Aufwendungen", { bold: true });

            pdfDoc.moveDown();
            pdfDoc.moveDown();

            pdfDoc
                .fontSize(8)
                .text(
                    "Wir sind nach dem letzten uns zugegangenen Steuerbescheid/Freistellungsbescheid des Finanzamtes als gemeinnützig und mildtätigen Zwecken dienend anerkannt und nach § 5 Abs.1 Nr. 9 des Körperschaftsteuergesetzes von der Körperschaftsteuer und nach § 3 Nr. 6 des Gewerbesteuergesetzes von der Gewerbesteuer befreit."
                );

            pdfDoc.moveDown();
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text("Frankfurt am Main V-Höchst", { underline: true });
            pdfDoc.fontSize(6).text("Bezeichnung des Finanzamts");
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text("E47 250 33178", { underline: true });
            pdfDoc.fontSize(6).text("Steuernummer");
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text("XIII./001", { underline: true });
            pdfDoc.fontSize(6).text("Verzeichnisnummer");
            pdfDoc.moveDown();

            pdfDoc.fontSize(12).text(formattedDate);
            pdfDoc.fontSize(6).text("Datum des Bescheides");

            pdfDoc.moveDown();
            pdfDoc.moveDown();

            pdfDoc
                .fontSize(10)
                .text(
                    "Es wird bestätigt, dass die Zuwendung nur zur Förderung der Jugendhilfe und Wohlfahrtspflege verwendet wird",
                    { bold: true }
                );
            pdfDoc.moveDown();
            pdfDoc.moveDown();
            pdfDoc.text(`Frankfurt, den ${formattedDate}`);
            // Add image next to the paragraph
            pdfDoc.moveDown();
            pdfDoc.moveDown();
            pdfDoc.fontSize(8).text("Hinweis:", { font: "Helvetica-Bold" });
            pdfDoc
                .fontSize(6)
                .text(
                    "Wer vorsätzlich oder grob fahrlässig eine unrichtige Zuwendungsbestätigung erstellt oder wer veranlasst, dass Zuwendungen nicht zu den in der Zuwendungsbestätigung angegebenen steuerbegünstigten Zwecken verwendet werden, haftet für die entgangene Steuer (§ 10 Abs. 4 EstG, § 9 Abs. 3 KStG, § 9 Nr. 5 GewStG)."
                );
            pdfDoc
                .fontSize(6)
                .text(
                    "Diese Bestätigung wird nicht als Nachweis für die steuerliche Berücksichtigung der Zuwendung anerkannt, wenn das Datum des Freistellungsbescheides länger als 5 Jahre bzw. das Datum der Feststellung der Einhaltung der satzungsmäßigen Voraussetzungen nach § 60a Abs. 1 AO länger als 3 Jahre seit Ausstellung des Bescheides zurückliegt (§ 63 Abs. 5 AO)"
                );

            pdfDoc.end();
        } catch (error) {
            console.error("Error generating PDF:", error);
            reject(error);
        }
    });
}
