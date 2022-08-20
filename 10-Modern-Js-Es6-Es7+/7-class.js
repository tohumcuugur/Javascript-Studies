//function constructor
function kisiES5(ad, meslek ,dogumYili) {
    this.ad = ad;
    this.meslek = meslek;
    this.dogumYili = dogumYili;
}

kisiES5.prototype.yasHesapla = function() {
    let tarih = new Date().getFullYear();
    return tarih - this.dogumYili
}


let emre = new kisiES5("ugur tohumcu" , "mühendis" , 1996);
let veli = new kisiES5("veli tohumcu" , "ogretmen" , 1986);
console.log(emre);
console.log(emre.yasHesapla());
console.log(veli);
console.log(veli.yasHesapla());





//class **** class kavramı es6 ile gelen bir kavram tarayıcıların çalıştırması için yazdığımız class'lar aslında transpiler ettiğimizde function constructor olarak derlenir.

class KisiES6{
    constructor(ad, meslek ,dogumYili){
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
        console.log("Nesne oluşturuldu.")
    }
    yasHesapla(){
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili
    }
}

let kisi1 = new KisiES6("ugur tohumcu" , "muhendis" , 1988);
let kisi2 = new KisiES6("veli tohumcu" , "inşaatçı" , 1964);
console.log(kisi1);
console.log(kisi2);
console.log(kisi1.yasHesapla());
console.log(kisi2.yasHesapla());
