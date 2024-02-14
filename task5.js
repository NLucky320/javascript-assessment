function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }
   let newArray = [];
    for (const Payments of arr) {
        if (Payments >= 3000) {
            income =Payments-Payments * 0.2;
        } else {
            income = Payments;
        };
        newArray.push(income);    
    }
    let totalIncome = 0;
    for (let i = 0; i < newArray.length; i++){
        totalIncome += newArray[i];
    }
    const totalSavings = totalIncome - livingCost;
   if (totalSavings >= 0) {
        return totalSavings;
        } 
        return 'earn more';     
}
    
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))
console.log(monthlySavings( [ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
console.log(monthlySavings([ 900 , 2700 , 3400], [ 900 , 2700 , 3400]))