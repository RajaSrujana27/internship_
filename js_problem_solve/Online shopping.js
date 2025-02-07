function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }

    let finalAmount = orderAmount * (1 - discount);

    if (finalAmount > 50) {
        return finalAmount; 
    } else {
        return finalAmount + 10; 
       
    }
}
console.log(calculateFinalAmount(10000))