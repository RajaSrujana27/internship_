function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300; 

  
    if (classType === "Business") {
        baseFare += 200; 
    } else if (classType === "First") {
        baseFare += 500; 
    }

    let extraLuggageFee = Math.max(0, Math.floor((luggageWeight - 20) / 10)) * 50;
    let totalFare = baseFare + extraLuggageFee;

    if (isStudent) {
        totalFare *= 0.85; 
    } else if (isSenior) {
        totalFare *= 0.90; 
    }

    return totalFare; 
}
console.log(calculateFlightFare("Economy", 15, false, false)); // Output: 300 (no extra luggage, no discounts)
