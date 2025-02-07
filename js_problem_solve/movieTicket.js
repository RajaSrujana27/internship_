function calculateTicketPrice(age, showTime) {
    let basePrice = 12; 

    if (showTime < 17) { // 17 represents 5 PM
        basePrice *= 0.8; // 20% discount
    }
    if (age < 12) {
        basePrice *= 0.6; // 40% discount for children
    } else if (age > 60) {
        basePrice *= 0.7; // 30% discount for seniors
    }

    return basePrice; 
}
console.log(calculateTicketPrice(28, 19)); // Adult, evening show: $12