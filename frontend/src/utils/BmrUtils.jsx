export const CalculateBmr = (age, gender, height, weight) => {
    let bmr = 0

    if (gender === 'male') {
        bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age) // US imperial system
        // 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years) // Metric system
    } else {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age) // US Imperial system
        // 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years) // Metric system
    }

    return bmr
}

export const convertFtToIn = (feet, inches) => {
    let output = inches
    output += (feet * 12)
    return output
}

export const convertMToCm = (meters, centimeters) => {
    let output = centimeters;
    output += meters * 100;
    return output;
};