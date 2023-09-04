import fs from "fs";
import nodemailer from "nodemailer";
import { generatePDF } from "./generatePDF"; // Adjust the path
import { db } from "../../config/firebase";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore/lite";

export default async function handler(req, res) {
    try {
        const { email, userData } = req.body;
        // Generate the PDF using the userData
        // const pdfPath = await generatePDF(userData);
        const pdfData = await generatePDF(userData);

        // Create a transporter using Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_LIVE_MAIL == "true" ? "smtp.office365.com" : "smtp.world4you.com",
            port: 587,
            secure: false,
            auth: {
                user:
                    process.env.NEXT_PUBLIC_LIVE_MAIL == "true" ? process.env.NEXT_LIVE_USER : process.env.NEXT_W4YUSER,
                pass:
                    process.env.NEXT_PUBLIC_LIVE_MAIL == "true"
                        ? process.env.NEXT_LIVE_PASSWORD
                        : process.env.NEXT_W4YPASSWORD,
            },
            // socketTimeout: 60000,
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_LIVE_MAIL == "true" ? process.env.NEXT_LIVE_USER : process.env.NEXT_W4YUSER,
            to: email, // Recipient's email address
            subject: "Quittung für Ihre Spende",
            html: `<p>Hallo ${userData.name ? userData.name : "Anonymer Spender"}, </p>
            <p>vielen Dank für Ihre Spende in der Höhe von ${userData.sum} Euro. </p>
            <p>Hier ist Ihre Quittung:</p>
            <a href="${pdfData.downloadURL}">Die Spendenquittung können Sie hier herunterladen.</a>
            <p>Haben Sie Fragen?<br>
            Kontaktieren Sie uns gerne
            unter <strong> spenden@skffrankfurt.de </strong> </p>
            <p>Wir wünschen Ihnen und
            Ihrer Familie frohe
            Weihnachten</p>
            <p>Das Team des
            Familienzentrums
            Monikahaus</p>
            
            `,

            // attachments: [
            //     {
            //         filename: "quittung.pdf", // Name of the attachment
            //         content: pdfBuffer, // Buffer of the PDF content
            //     },
            // ],
        });

        // Find and update the user document with the email
        const donationCollectionRef = collection(db, "donation");
        const q = query(donationCollectionRef, where("id", "==", userData.id));

        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs;

        if (documents.length === 1) {
            const userDocRef = doc(db, "donation", documents[0].id);
            await updateDoc(userDocRef, { email: email });
        }

        console.log(userData);
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "An error occurred while sending the email." });
    }
}
