import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { getDatabase, get, ref as rRef, onChildAdded } from "firebase/database"; // Import the Realtime Database

const firebaseConfig = {
    apiKey: process.env.NEXT_FIREBASE,
    authDomain: "monikahaus-3a374.firebaseapp.com",
    databaseURL: "https://monikahaus-3a374-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "monikahaus-3a374",
    storageBucket: "monikahaus-3a374.appspot.com",
    messagingSenderId: "553695420137",
    appId: "1:553695420137:web:94759c80897f5900a51a78",
    measurementId: "G-5N4J2XYP2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDb = getDatabase(app); // Initialize the Realtime Database

export { app, db, storage, realtimeDb };

export const fetchFirestoreData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const fetchRealtimeDatabaseData = async (path) => {
    try {
        const dataRef = rRef(realtimeDb, path);
        const dataSnapshot = await get(dataRef);

        if (dataSnapshot.exists()) {
            const data = dataSnapshot.val();
            // Convert the data to an array of objects with IDs
            const dataArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
            return dataArray;
        } else {
            console.log("No data found at the specified path.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const donationsRef = rRef(realtimeDb, "users");

// Function to start listening for new donations
export const startListeningForNewDonations = (userList, setUserList, initialDataLoaded) => {
    console.log(userList);
    onChildAdded(donationsRef, (snapshot) => {
        const newDonation = snapshot.val();
        // Log the new donation data

        console.log("New donation:", newDonation);
        console.log(userList);
        // setUserList((prevUserList) => [...prevUserList, newDonation]);
    });
};
