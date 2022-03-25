//Scopes.


//global scopes

var namee = 'ugur';

function logName() {
    var namee = 'ege'; //Dışarıda global olarak namee tanımladık ve fonksiyon içindede namee tanımladık fonksiyon içinde tanımlanana namee değişkeni daha öncelikli olduğu için onu yazdırır.Her fonksiyonun içinde tanımlanan değişken sadece o fonksiyona özeldik.
    var age = '20';
    console.log('function scope', age, namee) // dışarıda tanımladığımız değişkene fonksiyon içinden ulaşabiliriz.
}
// console.log(age); //Uncaught ReferenceError: age is not defined çıktısı alırız.

if (true) {
    var age = '30';
    console.log('block scope', namee, age);
}

logName();
console.log(namee);


//local scopes

//fonksiyonlar kendi scopelarını oluşturur.
//if-else while for gibi şart koşul ve döngüler kendi scopelarını oluşturmaz dışarıdan veri çekilebilir.
// ES6 ile gelen let ve const block scope oluşturur.var ile tanımlanan değişkene dışarıdan ulaşılabilir.

if (true) {
    var model = 'opel';
    let year = 2016;
    const color = 'black';
    console.log('block scope', model, year, color);
}
console.log(model);
//console.log(color);//Uncaught ReferenceError: color is not defined. Blocklar içindeki değişkene var ile tanımlanmışsa ulaşabiliriz. fakat let ve conts ile tanımlanmışşa fonksiyonlarda olduğu gibi dışarıdan ulaşamayız.

var i = 1;

for (var i = 0; i < 10; i++) {
    console.log('i', i);
}
console.log(i); // i en son güncel olan 9 değerini alır döngüye gelir i++ ile önce artırır ve 10 olur. 10<10 olmadığı için döngügen çıkar ve en son 10 yazdırır. var fonksiyon içinden değer çekebildiği için böyle problemler olabilir. let ve conts kullanmak daha sağlıklı.


var i = 1;

for (let i = 0; i < 10; i++) {
    console.log('i', i);
}
console.log(i);