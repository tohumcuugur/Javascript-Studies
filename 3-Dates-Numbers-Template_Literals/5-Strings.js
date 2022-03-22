const firstName = 'Uğur';
const lastName = "Tohumcu";
const age = 26;
let hobbies = 'sinema,spor,tenis,yürüyüş';



let val = firstName + ' ' + lastName ;

console.log(val);
console.log(typeof val);

//String concatetion

val = 'UĞUR';
val += ' ' + 'TOHUMCU';
console.log(val);

val ='Benim adım '+ firstName + ' ' + lastName +' '+ 'Yaşım :' + age + ' ' +'Edirne\'de yaşıyorum.';//ters slash ile tek tırnak kullanımı yapılarak string bir ifade olduğu belirtilebilir. Yada çift tırnak içine tek tırnak kullanımıda olabilir.
console.log(val);

//String Concat

val = firstName.concat(' ',lastName);
console.log(val);

//string Lengt 
val = val.length  //ugurtohumcu 11 karakter + yukarıda concat içinde bıraktığımız 1 boşluk toplam 12 karakter gösterir.

console.log(val);
console.log(typeof val);

//String UPPERCASE and lowercase

val = (firstName + lastName).toUpperCase();
val = (firstName + lastName).toLowerCase();

console.log(val);
console.log(typeof val);

// indexOf bir string içerisinde arama yaparken kullanıyoruz.

val = (firstName + lastName).indexOf('o'); // 5 çıktısı alırız. UgurTohumcu o harfi 5.harften sonra geliyor.

console.log(val);
console.log(typeof val);

//substring

val = (firstName + lastName).substring(2); //urTohumcu çıktısı verir 3.harften başlar.
val = (firstName + lastName).substring(2,5); // urT
console.log(val);
console.log(typeof val);


//slice substring ile aynı işi yapar
val = (firstName + lastName).slice(0,5); //UgurT

console.log(val);
console.log(typeof val);

//string replace
val = (firstName + lastName).replace('Uğur','MEHMET'); // uğur yerine mehmet yazdık. 

console.log(val);
console.log(typeof val);

//trim

val = ' '+(firstName + lastName).replace('Uğur','MEHMET')+' '; 
val = val.trim(); //baştaki ve sondaki boşlukları almak için kullanabiliriz. 
console.log(val);
console.log(typeof val);

//split
val = hobbies.split(','); // Hobiler kısmında aralarda virgül olduğu için burdada virgül koyarak virgüllerden itibaren ayırmasını söyledik.
console.log(val);