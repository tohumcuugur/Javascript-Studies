
let d = new Date();

console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear());


//let ornek_tarih = new Date('1/1/1990 16:45:55');
//let ornek_tarih = new Date(1990,1,1,16,45,55);

let ornek_tarih = new Date();

ornek_tarih.setDate(1);
ornek_tarih.setMonth(1);
ornek_tarih.setFullYear(1990);


console.log(ornek_tarih.getDate());
console.log(ornek_tarih.getMonth()+1);
console.log(ornek_tarih.getFullYear());

console.log(d.getDate()-ornek_tarih.getDate());
console.log(d.getMonth()-ornek_tarih.getMonth())
console.log(d.getFullYear()-ornek_tarih.getFullYear());

//iki tarih arasında aradan geçen zamanın bulunması 

var date1 = new Date('1,1,1990');
var date2 = new Date('4,6,1996');

var milisecond = date2-date1;  //iki tarihi çıkardığımızda sonucu otomatik olarak milisaniye alırız.sayiyeye çevirmek için 1000'e dakikaya çevirmek için 60'a bölebiliriz.
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gun = saat/24;
var hafta = gun/7;
var ay = hafta/4;
var yıl = ay/12;

console.log('yıl:'+yıl.toFixed(1));
console.log('ay:'+ay.toFixed(1));
console.log('hafta:'+hafta.toFixed(1));
console.log('gun:'+gun.toFixed(1));
console.log('saat:'+saat.toFixed(1));
console.log('dakika:'+dakika.toFixed(1));
console.log('saniye:'+saniye.toFixed(1));
console.log('milisaniye:'+milisecond.toFixed(1));


//yaş hesaplama
var myBirthday = new Date('3,3,1998'); //Ay/gün/yıl şeklinde gidiyor.Java'da milat kabul edilen (1970) ile 1998 arasını (28 seneyi) ms olarak aldık.
var ageAsMs = Date.now() - myBirthday.getTime(); //Date.now() ile 2022-1970 arasını ms olarak aldık.Yani 52 seninin ms cinsinden değeri.Bunu yukarıda myBirtday'den elde ettiğimiz (1998-1970) 28 senelik ms değerinden çıkarttık. Yani elimizde yaşımız olan (52-28)= 24 senelik ms değeri var.
var ageDate = new Date(ageAsMs); //İlk satırda yaptığımız işlemin tersini yaptık. İlk satırda tarih girip ms değeri elde ettik.Şimdi ise ms değeri girdik ve tarih elde edeceğiz."""YANİ 1994 YILI"""
console.log(ageDate.getFullYear()-1970);// Şimdi ise 24 yaşında olan birinin doğum tarihine çevriliş hali nedir? 1998 diyenler olabilir ama hayır. Milat 1970 kabul edildiği için 1970+24 1994'tür.YANİ ageDate.getFullYear() dediğimizde bize 1994 değerini verir.Bunuda 1970'ten çıkartırsan 1994-1970 buda 24 olan yaşımıza denk gelir.


var birtday5 = new Date('6/3/1996');//  ay/gün/yıl şeklinde gidiyor
var yas = (Date.now()-birtday5) / 31536000000
console.log(parseInt(yas));  






//console.log(myBirthday.getTime());  //.getTime ile zamanı ms olarak elde edebiliriz. Fakat java'nın miladı olan 1970 yılından girdiğimiz tarihe kadar olan kısmı ms olarak elde ettik yaş için güncel tarihide ms cinsinden 1970 yılından itibaren elde edip birbirinde çıkartırsak yaşı elde ederiz.