let val;
const a=10;
const b=5;
const c=5;
let d=5;

//1- Aritmatik operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++; //c++ şeklinde yazarsak val değerini hala 3 olarak görürüz bunun sebeni önce c'yi yazıp sonra 1 artırmasıdır ama eğer ++c'yazarsak önce arttırır sonra yazar.
val = ++d;
val = d--;
val = --d;


//console.log(c);

// 2-Atama operatörleri

val = a;

val += a; // val = val + a;
val -= a; // val = val - a;
val *= a; // val = val * a;
val /= a; // val = val / a;
val %= a; // val = val % a;


// 3-Karşılaştırma Operatorleri
val = a==b;
val = b==c;
val = b===c;  // değer kontrolu & type kontrolu
val = 5=='5'; // 5'lerden biri string ifade olmasına rağmen true değeri gelir.
val = 5==='5'; // 3 eşit ile yaptığımızda type kontrolu'de yaptığı için false değeri verecektir.
val = a!=b; // a b'ye eşit değil mi 
val = a!==b;
val = a>b;
val = b>a;
val = a>=b;
val = b>=a;
val = b<=a;


// 4- Mantıksal Operatörler

    //& (and)
    val = (a>b) && (a>c)
   
    // || (or)
    val = (a>b) || (c>a)

    // ! (not)
    val = !(a>b); //a b'den büyük değil mi 



console.log(val);
console.log(typeof val);