const mesaj = ["benim" , "adım" , "uğur" , "tohumcu"];

let sonuc = "";
for(let x of mesaj){
    sonuc += x + "";
}
console.log(sonuc);

console.log(...mesaj); // (...) spread yani ayırma operatörüdür. Yukarıda tek tek elemanları for döngüsü ile alıp ayırmak yerine spread operatörü işimizi oldukça kolaylaştırır. 

const dizi1 = ["bir" , "iki"]
const dizi2 = ["üç" , "dört"]

const dizi3 = [dizi1 , dizi2]; //Bu şekilde dizi birleştirme yaptığımızda dizi 3 altında 2 adet ayrı dizi olarak çıktı alırız , tek dizide birleşmiş olmaz.
console.log(dizi3);

const dizi4 = [...dizi1 , ...dizi2 , "beş" , "altı"]; // Spread operatörü ile yaptığımızda tek dizi olarak çıktı alırız yani yeni bir dizi şeklinde.
console.log(dizi4);

/////////////////////////////////////////////////

const sayilar1 = [1,2,3];
const sayilar2 = sayilar1; //  kopyalama işlemi referans olarak yapılır. (REFERANS COPY)
sayilar2[0] = 10; // sayilar2'nin bir elemanı değişince sayılar1'inde değişir. tam tersi durumdada aynısı olur. çünkü bellekte tuttukları yer aynıdır.
console.log(sayilar1,sayilar2);

const sayilar3 = [1,2,3];
const sayilar4 = [...sayilar3];  // VALUE COPY Spread operatörü ile yaptığımız değişiklik diğer değişkene yansımaz.Value copy(değeri kopyaladık)Bellekte iki farklı adreste tutulur.
sayilar3[0] = 10; 
console.log(sayilar3,sayilar4)

////////////////////////////////////////////////

const user = {
    username : "Uğur Tohumcu",
    email : "ugurtohumcuu@gmail.com"
}
const adress = {
    username : "WOOP",
    city : "edirne"
}

console.log({...user , ...adress}); // Bu durumda username: için son girdiğimiz son girdiğimiz key bilgisini yazdırır 

//////////////////////////////////////

// spread operatörünün fonskiyon içinde kullanımına rest parameters denir.

let toplam = function(...args){ // toplamın içine normalde toplam(a,b,c) şeklinde girip sayiları
 let sonuc = 0;
 for(let sayi of args){
    sonuc += sayi;
 }
 return sonuc;
}
console.log(toplam(1,3,5));
console.log(toplam(1,2,3,6,7));

/////////////////////////////////////////////

function bilgileriGöster(isim,soyad,...adres){
    console.log(isim,soyad,adres);
}
bilgileriGöster("uğur","tohumcu","edirne","kars");
