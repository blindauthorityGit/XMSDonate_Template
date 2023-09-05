import uploadImageAndGetURL from "./uploadImageAndGetURL"; // Import the image upload function

export const handleContinue = (
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
    fetchFirestoreData,
    setModalHeight
) => {
    if (currentStep === 3 && userData.isAnonymous) {
        setCurrentStep(currentStep + 3);
        setIsDisabled(true);
    } else if (currentStep == 6) {
        console.log("TEST");
        if (window.innerWidth < 321) {
            // Conditionally execute handleNext() based on window width
            setModalHeight("45%");
        }
        setCurrentStep(currentStep + 1);
    } else {
        setCurrentStep(currentStep + 1);
        setIsDisabled(true);
    }
};
