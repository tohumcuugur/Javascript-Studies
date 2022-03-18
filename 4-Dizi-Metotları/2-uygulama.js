//bmw ,mercedes,opel, mazda elemanlarına sahip bir dizi oluşturun.

let car =['bwm','mercedes','opel','mazda']

//let car1= new Array('bwm','mercedes','opel','mazda'); //array oluşturmanın 2.yöntemi
//console.log(car1);


//dizi kaç elemanlıdır.

console.log(car.length);

//dizinin ilk ve son elemanı

console.log(car[0]);
console.log(car[3]);

//renault değerini dizinin sonuna ekleyin

car.push('renault');
//car[car.length] = 'renault'; //alternatif
//car[4]='renault';
console.log(car);

//toyata değerini dizinin başına ekleyin

car.unshift('toyota');
console.log(car);

//renault değerini siliniz.

car.pop();
console.log(car);


//toyota değerini siliniz.

car.shift();
console.log(car);

//dizi elemanlarını ters çevir
car.reverse();
console.log(car);

//dizi elemanlarını alfabetik sıraya getirin.

car.sort();
console.log(car);

//[1,2,5,80] dizisini sıralayın

let sıralama = [11,8,5,15,80]; //alfabetik sıraya göre yapar [11, 15, 5, 8, 80] şeklinde çıktı verir 11 ve 15 , için ilk sayılar 1 ve 1 eşit ikinci sayılara bakar 1 ve 5 o zaman 15 büyüktür şeklinde çalışır.Sayıları sıralamak tek başına yetersiz.Fonksiyonlar ile işlevsellik kazandırılabilir.
function sayılar(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
sıralama.sort(sayılar);
console.log(sıralama);


//"opel" değeri bir dizi elemanı mıdır ?
console.log(car);
console.log(car.indexOf('opel'));
console.log(car.includes('opel'));


//var str = "chevrolet , dacia" ifadesini diziye çeviriniz.

var str = "chevrolet,dacia"
let arr2 =str.split(','); // virgül ifadesinden itibaren ayır dedik.
console.log(arr2);  


//oluşturulan dizileri birleştiriniz.

let arr3 = car.concat(arr2);
console.log(arr3);

//Dizinin son iki elemanını siliniz.

// arr3.pop();
// arr3.pop();

//arr3.splice(4,2);

console.log(arr3.slice(2,4));
console.log(arr3)

//Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
        //studentA=['Yiğit','Bilgi',2010];
        //studentB=['Ahmet','Veli',2015];
        //studentC=['Ceyda','Sude',2012];

       var studentA=['Yiğit','Bilgi',2010];
       var studentB=['Ahmet','Veli',2015];
       var studentC=['Ceyda','Sude',2012];

let students = [studentA,studentB,studentC];  //Bu şekilde dizileri dizi içerisine alabiliriz. Mesela öğrenciler bilgileri dizi içerisinde ve tüm öğrencilerde başka bir dizide.Bu dizilere olaşmak istediğinizdede yine tek tek ulaşabiliyoruz.    

console.log(students);
console.log(students[1]);
console.log(students[1][0]); //çok boyutlu diziler ile 1'nci dizinin
console.log(students[1][1]);
console.log(students[1][2]);