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
console.log(checkName('Salman'));
console.log(checkName('Salmaya'));
console.log(checkName('Salmay'));
console.log(checkName('RAFEE'));
console.log(checkName('RAFEI'));
console.log(checkName('RAFEIW'));
console.log(checkName('RAFEIWU'));
console.log(checkName('RAFEIWUo'));
console.log(checkName('RAFEe'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName('Rashed'));
console.log(checkName(["red"]));
console.log(checkName(["Rashed"]));