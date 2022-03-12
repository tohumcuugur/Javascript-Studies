/*
console.log("merhaba");
console.log("1234");
console.log([1,2,3,4]);
console.error("Hata Oluştu")
console.warn("Uyarı Oluştu")
*/

/*
//DERS-1
var age;
console.log(age);
age=20;
console.log(age);

var fullname='Ugur Tohumcu';
console.log(fullname);

var fullname='ahmet veli '; //full name değiskenine yeni bir değer atadık son atadıgımız degısken gecerlı olur.
console.log(fullname);

//Degisken tanımlama kuralları



//sayısal ifade ile ile basyalamaz  var 1yas  var yas1 olur  olmaz

 var yas1;
 var _yas2;
 var $yas3;

//Komut isimleriyle tanımlama yapılmaz var for; var switch gibi.

var ad='ugur'
var soyad='Tohumcu'
var ad_soyad='ugur tohumcu'

//Case sensetive (Büyük kücük duyarlılıgı)

var firstName='Ugur';
var FirstName='Tohumcu';
console.log(firstName);
console.log(FirstName);

// var , let  , const

let city='Edirne'
console.log(city)

 
const email='abc.gmail.com' //const sabit bir değişkendir tekrar email'e birşey atamak istersem hata alırım.
console.log(email)
*/

//DERS-2 DEĞİŞKEN TANIMLAMA TÜRLERİ

//1-pritive types

//Strings
let firstName='Ugur';
//number
let money=100.5; // ondalıklı yada tam sayılar number olarak gözükür.
let age=20;
//boolean
let isActive=true; //genelde koşul ifadelerinde kullanılır.
//null
let job=null;
//undefined
let car;

console.log(typeof car); //type of ile console üzerinden değişken tipi kontrol edilebilir. consolda string olarak görünür.

//2-reference types - object

//array

let names=['Ali','Veli','Ahmet']

//object
let address={
    city:'kocaeli',
    country:'Türkiye'
}

//function

var calculateAge = function(){
       return 0; 
}
console.log(typeof calculateAge) 


