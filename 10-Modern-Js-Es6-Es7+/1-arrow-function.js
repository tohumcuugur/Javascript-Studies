// ********************************ES5*****************************************
// function selamlama(){
//     console.log("Merhaba");
// }
// selamlama();

var selamlamaES5 = function(isim){
    console.log("Merhaba " + isim);
}
selamlamaES5("ali");

var toplamES5 = function(a,b){
    return a + b;
}
var sonuc = toplamES5(7,9);
console.log(sonuc);

//*******************************************ES6********************************
//arrow function

// const selamlamaES6 = () =>console.log("Merhaba");
const selamlamaES6 = (isim) =>{
    console.log("Merhaba " + isim);
}
selamlamaES6("ahmet");

// const toplamES6 = (a,b) => a+b;
const toplamES6 = (a,b) => {
  return a+b; //ES6 standartında parantez ile yazıldığında return gerekmektedir
};
var sonuc1 = toplamES6(5,7);
console.log(sonuc1);

