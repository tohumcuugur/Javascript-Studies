const fullName = 'Uğur Tohumcu';
const city = 'Edirne';
const yearOfBirth = '1996';

let val;

val = 'my name is'+' '+fullName+' '+'i live in'+' '+city+' '+'I am'+' '+(2022-yearOfBirth)+' '+'years old';
console.log(val);

    //ternary- operator.
val = `my name is ${fullName} i live in ${city} i am ${2022-yearOfBirth>=18?'over 18':'under 18'} `;//Yaş kısmı true yada false değer döndürür. over 18 kısmı yani ilk kısım true değeri için verilecek çıktı diğeride false değer için verilecek çıktıdır.
console.log(val);