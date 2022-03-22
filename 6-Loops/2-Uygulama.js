var sayi = Math.floor(Math.random()*10+1);
console.log(sayi);
var giris;
var deneme_adet = Number(prompt('Kaç sefer denemek istersiniz ?'));
for(i = 0  ; i<=deneme_adet ; i++){
        giris = prompt('Bir sayı girin');
        if(giris==sayi){
            console.log(`Tebrikler ${i+1} seferde buldunuz!`);  
            console.log(`Can ${100-((100/(deneme_adet))*i)}`);
            break;
        }else if(i==deneme_adet){
            console.log(`Malesef ${deneme_adet} kere denediniz ve bulamadınız. Doğru sayi:${sayi}`);
            break;
        }else if(sayi>giris){
            console.log('Yukarı');
        }else{
            console.log('Aşağı');
        }
}