//OOP : Nesne tabanlı programlama

// let soru = {
//     soruMetni : "Hangisi javascript paket yönetimi uygulamasıdır?",
//     cevapSecenekleri : {
//         a : "Node.Js",
//         b : "TypeScript",
//         c : "Npm",
//     },
//     dogruCevap : "c",
//     cevabıKontrolEt: function (cevap) {
//         return cevap ===this.dogruCevap ; 
//     }
// }
// let soru2 = {
//     soruMetni : "Hangisi javascript paket yönetimi uygulamasıdır?",
//     cevapSecenekleri : {
//         a : "Node.Js",
//         b : "Nuget",
//         c : "Npm",
//     },
//     dogruCevap : "b",
//     cevabıKontrolEt: function (cevap) {
//         return cevap ===this.dogruCevap ; 
//     }
// }
// console.log(soru.soruMetni);
// console.log(soru.cevabıKontrolEt("c"));
// console.log(soru2.cevabıKontrolEt("b"));


//Sınıf, Constructor ES5 
//ES5 , ES6 , ES7 Tüm tarayıcılar ES5'i destekler ES6 ve ES7 ile gelen komutlar ES5'e çevirip projelerde kullanılır ve tüm tarayıcılar ile uyumlu olur.

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni  = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap; 
    this.cevapKontrol = function(cevap){
        return cevap === this.dogruCevap;
    }
}

let soru1 = new Soru("Hangisi javascript paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "TypeScript",c : "Npm",},"c");
let soru2 = new Soru("Hangisi .NET paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "Nuget",c : "Npm",},"b");

let sorular = [
    new Soru("Hangisi js paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "TypeScript",c : "Npm",},"c"),
    new Soru("Hangisi .NET paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "Nuget",c : "Npm",},"b"),
    new Soru("Hangisi .NET paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "Nuget",c : "Npm",},"b"),
    new Soru("Hangisi .NET paket yönetimi uygulamasıdır?",{a : "Node.Js",b : "Nuget",c : "Npm",},"b"),
]
// console.log(sorular[0].soruMetni);

// for(let s of sorular) {
//     console.log(s.soruMetni); } // tüm soruları yazdırmak için alternatif kısa yol.

console.log(soru1.soruMetni);
console.log(soru1.cevapSecenekleri);
console.log(soru1.dogruCevap);

console.log(soru1.cevapKontrol("c"));
console.log(soru2.cevapKontrol("a"));


// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);