let val;
val = 10;    //number
val = ('10');  //string
val = Number('10'); //number
val = parseInt('10.5');//number
val = parseFloat(10.5);//number
//val = parseInt(10a); error
val = parseInt('10a');// sondaki a harfini okumaz ve number çıktısı verir.
val = parseInt('a10'); // NaN sayı olarak algılamaz.

val = isNaN('10'); //false değeri gelir nan değil
val = isNaN('a10'); // true değeri gelir nan değer 'dir.

var num = 10.12312455999;
val = num.toPrecision(4);//Kaç basamaklı olarak gösterileceğini ayarları yuvarlama işlemide yapar.
val = num.toFixed(4); //Fixed'e virgülden sonra kaç basamak gösterileceği girilir.

val = Math.PI; //Pi sayısının verir
val = Math.round(2.4); //En yakın sayıya yuvarlama işlemi yapar =2
val = Math.round(2.6); //En yakın sayıya yuvarlama işlemi yapar =3
val = Math.ceil(2.4); // Her zaman yukarı yukarı yuvarlar =3
val = Math.ceil(2.6); // Her zaman yukarı yuvarlar =3
val = Math.floor(2.4); // Her zaman aşağı yuvarlar =2
val = Math.floor(2.7); // Her zaman aşağı yuvarlar =2
val = Math.sqrt(64); //Kök alma
val = Math.pow(2,4); //Üstlü sayılar mototu 2^4=16
val = Math.abs(-100); // Mutlak değer
val = Math.min(1,2,3,4,4,2,4,6,7,9,6,5,4);  // Number Dizi oluşturur ve en küçüğünü verir.
val = Math.max(12,32,12,34,5,6,2,77,22,33,44); //  Number Dizi oluşturur ve en büyüğünü verir.
val = Math.floor(Math.random()*10+1); // 0 ile 1 arasında rastgele sayı üretir 10ile çarpıp 0 ile 9 arasında sayı almayı sağlayabiliriz.0 dahil olmasın istersek *10+1 şeklinde kullanabiliriz ve bu şekilde 0-9 değil 1-10 arasında sayı alırız... Tam sayı almak istersen math.floor yada math.ceil komutlarını kullanabiliriz.




console.log(val);
console.log(typeof val);