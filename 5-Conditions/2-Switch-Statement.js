
let category = 'Beyaz eşyaa'

// switch(category){
//     case 'telefon':
//         console.log('Telefon Kategorisi')
//     break;

//     case 'Beyaz eşya':
//         console.log('Beyaz Eşya Karegorisi');
//     break;
//     default:
//         console.log('Yalnış Kategori');
    
// }

///////////////////

let day =new Date().getDay()+1;
switch(day){
    case 0:
        day='Pazar';
    break;
    case 1:
        day='Pazartesi';
    break;
    case 2:
        day='Salı';
    break;
    case 3:
        day='Çarşamba';
    break;
    case 4:
        day='Perşembe';
    break;
    case 5:
        day='Cuma';
    break;
    case 6:
        day='Cumartesi';
    break;
}
console.log(`Bugün günlerden ${day}`); 

///////////////////

let day1 =new Date().getDay();
switch(day1){
    case 0:
    case 6:
        day1='Haftasonu';
    break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day1='Hafta içi';
    break;

}
console.log(`Bugün  ${day1}`); 

////////////////////////

const firstName = 'Uğur';
const age = 22;

switch(true){
    case (age>0 &&age<12):
        console.log(`${firstName} is a child`);
    break;
    case (age>=13 && age<=19):
        console.log(`${firstName} is a teenager`);
    break;
    default:
        console.log(`${firstName} is a adult`);
}

