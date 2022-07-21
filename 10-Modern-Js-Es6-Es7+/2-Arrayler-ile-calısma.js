const sayilar = [1,2,3,4,5,6,7,8,9,10,11];
// const teksayilar = [];
// for(let sayi of sayilar){
//     if(sayi%2==1){
//         teksayilar.push(sayi);
//     }
// }
// console.log(teksayilar);

const tekSayiKontrol = (sayi) =>{
    return sayi%2==1;
}
// const tekSayilar = sayilar.filter(tekSayiKontrol); //filter metodu ile sonucu dizi şeklinde döndürür.
const tekSayilar = sayilar.map(tekSayiKontrol);  // map metodu ile sonucu eğer bir koşul var ise sayi%2==1 gibi true false olarak dizi şeklinde alırız.

console.log(tekSayilar);

const urunler = [
    {urun_adi : "iphone11" , fiyat : 12000},
    {urun_adi : "iphone12" , fiyat : 14000},
    {urun_adi : "iphone13" , fiyat : 16000},
    {urun_adi : "iphone13 Pro" , fiyat :18000},
]
// const sonuc = urunler.map(urun => urun); // objelerin tümünü verir.
const sonuc = urunler.map(urun => urun.fiyat);  // fiyat bilgisi , ürün adı gibi değerleri çekebiliriz.Alt özellikleri map metodu ile çekebiliriz. 
console.log(sonuc);

const sonuc1 = urunler.filter(urun => urun.fiyat > 15000).map(urun => urun.urun_adi); // filtremeleme işlemleri için kullanabiliriz. 
console.log(sonuc1);

const sonuc2 = urunler.find(urun => urun.fiyat > 12000); // koşula uyan bulduğu ilk değeri getirir.
console.log(sonuc2);

const sonuc3 = urunler.findIndex(urun => urun.fiyat > 12000); // Koşula uyan bulduğu ilk değerin index numarasını verir.
console.log(sonuc3);