//Date object


let d = new Date();
let birthday = new Date(1996 , 6 , 4);
//Set methods
d.setFullYear(2025); //set ile var olan güncel bilgiler üzerinde değişiklik yapabiliriz.
d.setHours(18);

//Get Methods
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getTimezoneOffset());
console.log(d.getSeconds());


console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()-birthday.getMonth());

console.log(d);
console.log(typeof d);