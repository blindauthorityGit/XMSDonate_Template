import fs from "fs";
import PDFDocument from "pdfkit";

export async function generatePDF(userData) {
    try {
        const pdfDoc = new PDFDocument();
        const pdfPath = "quittung.pdf";
        pdfDoc.pipe(fs.createWriteStream(pdfPath));

        // Add content based on userData
        pdfDoc.text(`Receipt for ${userData.name}`);
        pdfDoc.text(`Amount: ${userData.sum}`);
        // Add more content as needed

        pdfDoc.end();
        return pdfPath; // Return the generated PDF path
    } catch (error) {
        console.error("Error generating PDF:", error);
        throw error;
    }
}
