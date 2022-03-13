//ahmet ve mehmetin koy ve kg bilgilerini girin.
//alınan bilgilere göre kilo endekslerini hesaplayın.
// formul: kisinin kilosu / boy uzunlugunun karesi
//asagıdaki tabloya göre ahmet ve mehmet hangi gruba giriyor.
//0 - 18.4: Zayıf
//18,5 -24.9: Normal
//25 - 29.9: Fazla kilolu
//30 - 34.9: Sisman(Obez)

const ahmet_boy = 1.72;
const ahmet_kilo = 68;
const mehmet_boy = 1.82;
const mehmet_kilo = 120;

ahmet_endeks = (ahmet_kilo/((ahmet_boy)*2));
mehmet_endeks = (mehmet_kilo/((mehmet_boy)*2));

console.log(ahmet_endeks.toFixed(2) , mehmet_endeks.toFixed(2))

var ahmet_Zayıf = (ahmet_endeks>=0) && (ahmet_endeks<=18.4);
var ahmet_Normal = (ahmet_endeks>18.5) && (ahmet_endeks<=24.9)
var ahmet_Fazla_Kilo = (ahmet_endeks>25) && (ahmet_endeks<=29.9)
var ahmet_Sisman =  (ahmet_endeks>30) && (ahmet_endeks<=34.9)

console.log("ahmet Zayıf "+ahmet_Zayıf);
console.log("ahmet Normal "+ahmet_Normal);
console.log("ahmet Fazla Kilolu "+ahmet_Fazla_Kilo);
console.log("ahmet Şişman(Obez) "+ahmet_Sisman);

var mehmet_Zayıf = (mehmet_endeks>=0) && (mehmet_endeks<=18.4);
var mehmet_Normal = (mehmet_endeks>18.5) && (mehmet_endeks<=24.9)
var mehmet_Fazla_Kilo = (mehmet_endeks>25) && (mehmet_endeks<=29.9)
var mehmet_Sisman =  (mehmet_endeks>30) && (mehmet_endeks<=34.9)

console.log("Mehmet Zayıf "+mehmet_Zayıf);
console.log("Mehmet Normal "+mehmet_Normal);
console.log("Mehmet Fazla Kilolu "+mehmet_Fazla_Kilo);
console.log("Mehmet Şişman(Obez) "+mehmet_Sisman);


