var hesap  = 2000;
var ek_hesap = 1000;

var giris = Number(prompt('Kaç tl çekmek istersiniz ?'));

if(giris<hesap){
    console.log(`Hesabınızda ${hesap-giris} tl kaldı.`)
}

function total(hesap,ek_hesap){

    total_money = hesap+ek_hesap;

    if(giris>hesap){
        if(total_money>giris){
            var onay = Number(prompt(`Hesabınızdaki ücret yetersiz dilerseniz eksik kalan ${giris-hesap} tl'yi ek hesaptan çekebilirsiniz. Onaylıyorsanız 1'e basın`))
            if(onay==1){
                console.log(`Ek Hesabınızda ${total_money-giris} tl kaldı.`)
            }
        }
        else{
            console.log(`Hesabınızda ${total_money}tl var.Uygun bir mebla girin`)
        }
    }
}
total(hesap,ek_hesap);
