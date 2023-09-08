import { getDatabase, ref as rRef, push, set } from "firebase/database";
import { app, realtimeDb } from "../config/firebase";

const saveUserDataToRealtimeDB = async (userData) => {
    // try {
    const db = getDatabase(app);
    set(rRef(db, "users/" + userData.id), userData)
        .then((data) => {
            console.log("SAVE SUCCESSFUL", data);
        })
        .catch((error) => {
            console.log("error");
        });
    //     console.log(rRef, realtimeDb);
    //     // Reference to the "donations" node, replace with your actual path
    //     const donationsRef = rRef(realtimeDb, "donations");

    //     // Generate a new unique key for the donation
    //     const newDonationKey = push(donationsRef).key;

    //     // Create an object with the donation data
    //     // const donationData = userData;
    //     const donationData = {
    //         name: "bubu",
    //         sum: 464,
    //     };

    //     // Set the data at the generated key
    //     await set(rRef(donationsRef, newDonationKey), donationData);

    //     // Return true to indicate success
    //     console.log("Data was saved to Realtime Database");
    //     return true;
    // } catch (error) {
    //     console.error("Error saving user data to Realtime Database:", error);
    //     // Return false to indicate failure
    //     return false;
    // }
};

export default saveUserDataToRealtimeDB;
