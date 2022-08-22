//kisi = > k1,k2
//ogrenci = > o1,o2


//parent
class Kisi {
    constructor(ad,dogumYili) {
        console.log("kisi constructor");
        //kisi constructor
        this.ad = ad;
        this.dogumYili = dogumYili;
    }
    yasHesapla() {
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili
    }
    kendiniTanıt(){
        return `benim adım ${this.ad}`
    }
}
//child
class Ogrenci extends Kisi { // kişi sınıfı içindeki özellikleri kalıtım yoluyla aktarıyoruz
    constructor(ad, dogumYili, okulNumarasi) {
        console.log("ogrenci constructor");
        //ogrenci constructor
        //kisi constructor 
        super(ad, dogumYili);
        this.okulNumarasi = okulNumarasi;
    }
    dersCalis(){
        return (`${this.ad} ders çalışıyor`);
    }
    kendiniTanıt(){
        return `benim adım ${this.ad} ve okul numaram ${this.okulNumarasi}`; // bırada tanımladığımız üstte kişi classında tanımladığımız kendiniTanıt() kısmını ezmiş oldu.
    }
}

let kisi = new Kisi("ali", 1990);
let ogrenci = new Ogrenci("ahmet", 2000, 123); 

// console.log(kisi.yasHesapla());
// console.log(ogrenci.yasHesapla());//ogrencide kalıtım yoluyla kisi özelliklerini aldığı için tüm özelliklerini kullanabiliriz.
// console.log(ogrenci.dersCalis());

console.log(kisi.kendiniTanıt()); //benim adım ali
console.log(ogrenci.kendiniTanıt()); //benim adım ahmet

