//function declarations
function sum(a,b){
    c = a + b;
    return c ;
}
console.log(sum(10,20));



//function expressions
const func = function(a=0,b=0){ //Default parametre olarak verebiliriz ES6 ile birlikte gelen bir özellik yani bunu yaptığımızda aşağıdaki if conditions'lara gerek kalmaz

    if(typeof a==='undefined'){
        a=0;
    }
    if(typeof b==='undefined'){
        b=0;
    }

    c = a + b;
    return c
}
console.log(func(30,50));
console.log(func(10))//NaN çıktısı alırız . c = 10 + Undifined  olduğu için Bir sayı çıktısı alamayız.
console.log(func(10,55,22,577)) //İlk 2 parametreyi alır ve diğerlerini kullanmaz.

function sumAll(){
    var total = 0;
    for(let i=0;i<arguments.length;i++){  //arguments ile fonksiyonların gönderdiği parametrelere ulaşabiliriz.
        total+=arguments[i];
    }
    return total;
}
console.log(sumAll(10,20,50,150,90));
