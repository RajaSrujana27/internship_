
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.9; 
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount; 
    }
    return orderAmount; 
}

console.log(applyCoupon(300, "FREESHIP"));   // 300 (no discount, free shipping)
