import uploadImageAndGetURL from "./uploadImageAndGetURL"; // Import the image upload function

export const handleContinue = async (
    currentStep,
    userData,
    setCurrentStep,
    setIsDisabled,
    userList,
    setUserList,
    setShowOverlay,
    setShowSuccess,
    closeModal,
    setShowUnclaimed,
    saveUserDataToFirestore,
    fetchFirestoreData
) => {
    if (currentStep === 3 && userData.isAnonymous) {
        setCurrentStep(currentStep + 2);
        setIsDisabled(true);
    } else if (currentStep === 7) {
        try {
            let updatedUserData = { ...userData };

            if (userData.image) {
                // Upload the image and get the URL
                const imageDownloadURL = await uploadImageAndGetURL(userData.image);
                console.log(imageDownloadURL);
                // Update the userData with the image download URL
                updatedUserData = {
                    ...updatedUserData,
                    image: imageDownloadURL,
                };
            }
            console.log("updatedUserData", updatedUserData);

            if (JSON.parse(process.env.NEXT_PUBLIC_DEV)) {
                const newUserList = [...userList, updatedUserData];
                setUserList(newUserList);
                setShowOverlay(true);
                setShowSuccess(true);
            } else {
                // Save the updated userData to Firestore
                await saveUserDataToFirestore(updatedUserData);

                // Fetch the updated user list
                const data = await fetchFirestoreData("donation");
                setUserList(data);
                setShowOverlay(true);
                setShowSuccess(true);
            }

            closeModal();
            setShowUnclaimed(false);
        } catch (error) {
            console.error("Error handling continue:", error);
        }
    } else {
        setCurrentStep(currentStep + 1);
        setIsDisabled(true);
    }
};
