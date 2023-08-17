import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_FIREBASE,
    authDomain: "monikahaus-3a374.firebaseapp.com",
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

export { app, db, storage };

export const fetchFirestoreData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
