function deleteInvalids(array) {


    if (!Array.isArray(array)) {
        return 'Invalid Array'
    } 
for (let i = array.length - 1; i >= 0; i--){
        if (typeof array[i] !== 'number'|| isNaN(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(deleteInvalids(1, 2, -3));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids([1, 2, -3, NaN, [1,2], null, undefined]));
console.log(deleteInvalids([1, 2, -3, NaN, [1,2], null, undefined, {obj:'lala'}]));
console.log(deleteInvalids(['1' , {num:2} , NaN]));
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala'}]));
console.log(deleteInvalids([NaN, 1,12,0 ,-1 , undefined]));
console.log(deleteInvalids(NaN, 1, 12, 0, -1, undefined));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
