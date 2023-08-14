export default function isStepDataValid(stepNumber, userData) {
    switch (stepNumber) {
        case 1:
            // Validation for step 1 (BallChoice)
            return !!userData.color; // Return true if userData.color is truthy, false otherwise
        case 2:
            // Validation for step 2 (Sum)
            return !!userData.sum; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        case 3:
            // Validation for step 2 (Sum)
            return userData.isAnonymus !== null; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        case 4:
            // Validation for step 2 (Sum)
            return !!userData.name; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        case 5:
            // Validation for step 2 (Sum)
            return true; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        case 6:
            // Validation for step 2 (Sum)
            return true; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        case 7:
            // Validation for step 2 (Sum)
            return !!userData.id; // Return true if userData.sum is truthy, false otherwise
        // Add more cases for other steps here
        default:
            return false; // If the stepNumber is not valid, return false
    }
}
