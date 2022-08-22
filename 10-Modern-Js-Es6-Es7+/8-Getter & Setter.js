//class **** class kavramı es6 ile gelen bir kavram tarayıcıların çalıştırması için yazdığımız class'lar aslında transpiler ettiğimizde function constructor olarak derlenir.
class Kisi {
    constructor(ad, meslek, dogumYili) {
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
    }
    yasHesapla() {
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili
    }
    get ad(){
        return this._ad;
    }
    set ad(value){
        if(value.length< 3){
            console.log("ad için çok az karakter");
            return; // returnu görünce alt satır çalışmaz ve ad değerinin içine birşey gönderilmez
        }
        this._ad = value;
    }
    get dogumYili(){
        return this._dogumYili;
    }
    set dogumYili(value){
        if(value < 1900 || value > new Date().getFullYear()){
            console.log("tarih bilgisini yanlış girdiniz");
        }
    }
}

let kisi1 = new Kisi("ugur", "muhendis", 2023);

console.log(kisi1);
console.log(kisi1.ad);
