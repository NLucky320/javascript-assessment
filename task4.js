function password(obj) {
    
    if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    } 
    const yourPassword = `${obj.siteName[0].toUpperCase()+ obj.siteName.slice(1).toLowerCase()}#${obj.name}@${obj.birthYear}`;
    return yourPassword;
}
console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }))
console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }))
console.log(password({ name: 'toky' , birthYear: 199, siteName: 'google' }))
console.log(password({ name: 'toky' , birthYear: 1999, }))
console.log(password({ name: 'kolimuddin' , birthYear: 1999}))