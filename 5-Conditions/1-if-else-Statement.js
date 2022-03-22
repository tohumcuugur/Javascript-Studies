//İf-else statements
//if-else ifadelerine ya bir bool türünded değer yazılır yada bool türünde bir değer verecek bir koşul yazılır.
const firstName = 'Uğur';
const age = 22;
const isStudent = true;
const school = 'university';

// if (firstName === 'Uğur') {
//     console.log('Merhaba Uğur');
// }

// if (age === 26) {
//     console.log('Yaşınız 26');
// }

// if (isStudent){ //çıktı verir
//     console.log('Merhaba');
// }
// if (isStudent==true){// isstudent==true'mu çıktı verir.
//     console.log('Merhaba');
// }
// if (isStudent==false){// ==false olmadığı için çıktı vermez.
//     console.log('Merhaba');
// }
// else{//Else yani diğer seçeneğimiz if'in false değer olması halinde çalışır.
//     console.log('Merhaba Merhaba');
// }


// if (age>=18){
//     if((school=='university')||(school=='highSchool')){ // '||'veya '&&' ve
//         console.log('Ehliyet alabilsiniz.');
//     }
//     else{
//         console.log('Eğitim durumunuz yetersiz.')
//     }
// }
// else{
//     console.log('Ehliyet alamazsınız.');
// }


// if((age>0) && (age<12)){
//     console.log(`${firstName} is a child`);
// }else if(age>=13 && age<=19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is a adult`);
//  }


//undefined


if (typeof id !== 'undefined'){
    console.log('id'+id);
}else{
    console.log('no id');
}

let id1 = '123555';

if (typeof id1 !== 'undefined'){
    console.log('id=' +id1);
}else{
    console.log('no id');
}