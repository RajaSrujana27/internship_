function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
     balance -= amount;
         return `remaining balance: ${balance}`;
}
console.log(atmWithdrawal(10000,5000,1456,1456))