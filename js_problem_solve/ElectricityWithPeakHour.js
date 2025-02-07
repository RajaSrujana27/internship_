function calculateElectricityBill(units, timeOfDay) {
    // Determine if the time is during peak hours (8 PM to 8 AM)
    let peakMultiplier = (timeOfDay >= 20 || timeOfDay < 8) ? 1.1 : 1.0;
    let bill;
    if (units < 100) {
        bill = units * 5; 
    } else if (units <= 300) {
        bill = 100 * 5 + (units - 100) * 4; 
    } else {
        bill = 100 * 5 + 200 * 4 + (units - 300) * 3; 
    }

    return bill * peakMultiplier;
}

console.log(calculateElectricityBill(50, 10));  
