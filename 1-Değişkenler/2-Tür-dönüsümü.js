

let num1=Number('5');
let num2=Number('10');

console.log(num1+num2);
console.log(typeof num1);

//number to string
let val=String(10); //çıktı olarak value'den 10 çıktısı typeof val'dan string çıktısı ve val.length'ten 2 çıktısı alırız.

//bool to string

val=String(true);
//date to string
val=new Date();

val=String(new Date());

val=String(new Date().getFullYear()) //tarih ,zaman ,dakika ,saniye,gün gibi veriler alınabilir.   

console.log(val);
console.log(typeof val);
console.log(val.length); 

//array to string
val=String([1,2,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.length); 

//toString()

val=(10) .toString();

console.log(val);
console.log(typeof val);
console.log(val.length); 

//string to number
val=Number(10);
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('a');//Nan çıktısı alırız not a number..
val=Number([1,2,3,4]);//dizi'dede nan çıktısı alırız.

console.log(val);
console.log(typeof val);
console.log(val.toFixed(3)); // lenght sayısal ifadelerde undefined olarak gözükür yani sadece string ifadelerde kullanılır.

//parseInt
//parseFloat    

val=parseInt('10');
val=parseInt('10.5');
val=parseFloat('10.5'); //parseFloat ile ondalık sayı yazdırabiliriz.


console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));