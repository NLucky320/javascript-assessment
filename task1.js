function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
   return 'Invalid Number'
}  
    const earnings = ticketSale * 120;
    const expenses = 500 + 8 * 50;
    const remaining = earnings - expenses;
    return remaining;
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(0));
console.log(calculateMoney(-130));