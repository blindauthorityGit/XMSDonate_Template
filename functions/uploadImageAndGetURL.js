import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

const uploadImageAndGetURL = async (imageFile) => {
    try {
        const storageRef = ref(
            storage,
            JSON.parse(process.env.NEXT_PUBLIC_LIVE_DB) ? "imagesLive/" : "images/" + imageFile.name
        ); // Create a reference to the image storage path
        const snapshot = await uploadBytes(storageRef, imageFile); // Upload the image bytes
        const imageDownloadURL = await getDownloadURL(storageRef); // Get the image download URL
        console.log(imageDownloadURL);
        return imageDownloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

export default uploadImageAndGetURL;
