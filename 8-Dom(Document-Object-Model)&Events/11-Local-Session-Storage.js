//storing information in the browser.


//*****************LOCAL STORAGE

//*****************set item
const firstName = localStorage.setItem('firstName','UĞUR');
const lastName = localStorage.setItem('lastName','TOHUMCU');
let hobbies  = ['sinema','arabalar','gezmek'];


//**************************get item
val = localStorage.getItem('firstName');


//***************************remove item

// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

//*************************************clear
//localStorage.clear();




//***************************set array to storage
localStorage.setItem('hobies',JSON.stringify(hobbies)); // Normally its writing like a string. but if we want to write it like an OBJECT... İMPORTANT!!!!!!!!!!!!!!!!!!!!!while storing the arrays is the local storage its better storing as a OBJECT so JSON.stringify is important.

val = JSON.parse(localStorage.getItem('hobies')); // Now we got the array that we storage in local storage and we take it as a OBJECT. 

console.log(val);
console.log(localStorage);




//*************************SESSİON STORAGE
// const city = sessionStorage.setItem('city','edirne');
// const country = sessionStorage.setItem('country','Türkiye');

// console.log(sessionStorage);