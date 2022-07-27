////////////////////array destructuring////////////////////////////////

let bilgi = ["ugur", "tohumcu","edirne","kars","22100"]; 

// let firstName = bilgi[0];
// let lastName = bilgi[1];

// let [firstName, lastName] = bilgi;
// let [firstName, lastName] = "Uğur TOHUMCU".split(" ");
// console.log(firstName, lastName);

// let [firstName, lastName , city , town] = bilgi;
// console.log(firstName, lastName , city , town);

let [firstName, lastName , ...address] = bilgi;
console.log(firstName, lastName ,address );


///////////////////object destructuring//////////////////////////////////

let urun = {
    marka : "Apple,",
    model : "XS Max,",
    fiyat : "20000₺",
    satisDurumu : true,
}

let {marka, model, fiyat = 0, satisDurumu = false} = urun; // fiyat = 0 şeklinde tanımlamamızın sebebi eğer objenin içinde bilgi girilmediyse default olarak 0 değerini gönderir. Aynı şekilde satisDurumu = false içinde eğer satisDurumu için bir değer girmeseydik yine default olarak false değerini gönderecekti

console.log(marka, model, fiyat, satisDurumu);

function urunGoster(marka, model ,fiyat= 0, satisDurumu = false){
    console.log(marka, model , fiyat , satisDurumu);
}
urunGoster("apple,","iphone12"); // fiyat otomatik 0 olur satış değeride otomatik false atanır.


function urunGoster1(obj){
    let {marka, model, fiyat = 0, satisDurumu = false} = obj;
    console.log(marka, model , fiyat , satisDurumu);
}
urunGoster1(urun);


