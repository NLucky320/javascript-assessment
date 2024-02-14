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

console.log(deleteInvalids(1, 2, -3));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids([1, 2, -3, NaN, [1,2], null, undefined]));
console.log(deleteInvalids([1, 2, -3, NaN, [1,2], null, undefined, {obj:'lala'}]));
console.log(deleteInvalids(['1' , {num:2} , NaN]));
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala'}]));
console.log(deleteInvalids([NaN, 1,12,0 ,-1 , undefined]));
console.log(deleteInvalids(NaN, 1, 12, 0, -1, undefined));