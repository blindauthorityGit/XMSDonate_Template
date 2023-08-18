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

            // Add content based on userData
            pdfDoc.text(`Receipt for ${userData.name}`);
            pdfDoc.text(`Amount: ${userData.sum}`);
            // Add more content as needed

            pdfDoc.end();
        } catch (error) {
            console.error("Error generating PDF:", error);
            reject(error);
        }
    });
}
