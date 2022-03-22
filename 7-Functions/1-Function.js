function yasHesapla(dogumYili){
    return 2022-dogumYili;
}
let ugur = yasHesapla(1996);
console.log(ahmet = yasHesapla(1992));
console.log(ugur);

function emekliligeKacYıl(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65-yas;

    if(emeklilik>0){
        console.log(`Emekli olmana ${emeklilik} yıl kaldı.`)
    }
    else{
        console.log('Zaten emekli oldun.');
    }
}
emekliligeKacYıl(1996,'Uğur');
emekliligeKacYıl(1989,'Mehmet');
emekliligeKacYıl(1964,'Veli');



   