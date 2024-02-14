function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
   return 'Invalid Number'
}  
    const earnings = ticketSale * 120;
    const expenses = 500 + 8 * 50;
    const remaining = earnings - expenses;
    return remaining;
}


function checkName(name) {
    if (typeof name !== 'string') {
    return 'invalid'
}
    const lastCharacter = name.slice(-1).toLowerCase();
     if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastCharacter)) {
            return "Good Name";
        } 
            return "Bad Name";
}


function deleteInvalids(array) {
    let newArray = [];
    if (!Array.isArray(array)) {
        return 'Please insert an Array'
    } 
  for (const arr of array){
        if (typeof arr === 'number' && isNaN(arr)===false) {
            newArray.push(arr);
        }
    }
    return newArray;
}


function password(obj) {
    if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    } 
    const yourPassword = `${obj.siteName[0].toUpperCase()+ obj.siteName.slice(1).toLowerCase()}#${obj.name}@${obj.birthYear}`;
    return yourPassword;
}


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
