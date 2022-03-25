hesapA = {
    isim : "Uğur",
    hesapNo: "123467778",
    bakiye: 3000,
    ek_bakiye:1000,
}
hesapB = {
    isim : "Ahmet",
    hesapNo: "1234677789",
    bakiye: 3000,
    ek_bakiye:1000,
}

hesapC = {
    isim : "Veli",
    hesapNo: "12346777890",
    bakiye: 3000,
    ek_bakiye:1000,
}

var para = Number(prompt('Kaç para çekmek istersiniz ?'));

function paraCek(hesap,miktar){ //obje bilgisinin değerlerini fonksiyon içinden değiştiriyoruz.Obje'nin kopyası değil adresi gönderilir.Yani tek kopya üzerinden değişiklik yaptığımız için bakiye'yi güncelleyebiliyoruz. var bakiye = 2000 ; var isim = "ugur" şeklinde fonksiyona gönderip işlem yapmak isteseydik. Bakiyeyi gönderince kopyası oluşturulur ve kopya üzerinden güncelleme yaparız. Orjinali sabip kalır. Objelerde adres üzerinden güncelleme yapar. Primitive tipler value tipler olur yani var bakiye =2000 gibi . Objeler ise referans tip olur.
    console.log(`Merhaba ${hesap.isim}`);

    if(hesap.bakiye>=miktar){
        hesap.bakiye = hesap.bakiye-bakiye;
        console.log("Paranızı alabilirsiniz");
    }
    else{
        var toplam = hesap.bakiye + hesap.ek_bakiye;
        if(toplam>=miktar){
            if(confirm(`Ek hesabınızdan ${miktar-hesap.bakiye} tl kullanmak istermisiniz ?`)){
                console.log("Paranızı alabilirsiniz") //İf the answer is Yes.
                var bakiye = hesap.bakiye;
                var ekhesap = miktar-bakiye;
                hesap.bakiye = 0;
                hesap.ek_bakiye = hesap.ek_bakiye-ekhesap
            }
            else{
                console.log(`${hesap.hesapNo} no'lu hesabınızda ${miktar} tl bulunmamaktadır.`)
            }
        }
        else{
            console.log("Bakiyeniz yetersiz.")
        }
    }
}


paraCek(hesapA,para);
paraCek(hesapA,para);

