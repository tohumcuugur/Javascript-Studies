var num = 15.123456789;

//toplamda 3 basamaklı sayı kullan.
val = num.toPrecision(3);
console.log(val);

//ondalık kısmını 3 basamakla sınırla.
val = num.toFixed(3);
console.log(val)

//en yakın sayıya yuvarla 
sonuc = Math.round(val);
console.log(sonuc);

//aşağı yuvarla 
sonuc = Math.floor(val);
console.log(sonuc);

//yukarı yuvarla
sonuc = Math.ceil(val);
console.log(sonuc);

//1,2,10,56,20 sayılarının en büyüğünü ve en küçüğünü bul
sonucB = Math.min(1,2,10,56,20);
sonucK = Math.max(1,2,10,56,20);
console.log(sonucB , sonucK);

//sayı aralığını kullanıncının belirleyeceği rastgele bir sayı üretin

var sayı1 = 50;
var sayı2 = 100;

console.log(Math.floor(sayı1+Math.random()*(sayı2-sayı1)))

/*persolelin yaptığı mesai'ye göre alacağı maaşı hesaplayalım.
        **Brüt maaş:3700tl
        **Brüt mesai:10.3tl
        
        Ağustos ayında toplam mesai 42 saat ise toplam bürüt maaş nedir?
        brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam maaş nedir?
*/

var toplamMesai = 42;
var brutMaas = 3700;
var mesaiucret = 10.3;

var toplamBrutMaas = brutMaas +(toplamMesai*mesaiucret);
var toplamNetMaas = toplamBrutMaas-(toplamBrutMaas*0.25);


console.log('Brut Maaş = '+toplamBrutMaas.toFixed() ,'    Net Maaş = '+toplamNetMaas.toFixed());