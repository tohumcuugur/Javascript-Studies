//loops
//for loops

for (var i = 1; i < 10; i++) {
    console.log(i);
}
for (let i = 1; i < 10; i++) {
    if (i == 3) {
        console.log('Favori rakamım 3');
        continue; //eğer continue vermezsek burdan sonra console kısmına devam eder ve favori rakamım 3'ün alt satırında bir 3 daha olur. Bu koşula girildiğinde alt satıra geçmesini istemediğimiz için continue komutuyla , döngünün sonraki aralıktan devam etmesini sağlarız.
    }
    if (i == 7) {
        console.log("Bir haftada 7 gün var.")
        break; //breakten sonra döngü devam etmez.
    }
    console.log(i)

}
//arrays
var dizi = ["opel", "toyota", "honda", "bmw", "mercedes"];
for (i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}
//objects
var people = [{
        firstName: 'Uğur',
        lastName: 'Tohumcu'
    },
    {
        firstName: 'Tolgahan',
        lastName: 'Bulut'
    },
    {
        firstName: 'Yunus',
        lastName: 'Fuştanlı'
    },
]

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//while loop
let c = 0;
while (c < 10) {
    console.log(c);
    c++;
}
//do while
let d = 0;
do {
    console.log(d);
    d++;
} while (d < 10); //do while'ın while'dan farkı koşul yanlış olsa bile do kısmına ilk başta girdiği için bir kere çıktı verir. daha sonra while döngüsüne uğrar ve döngüye giremediği için kesilir.    

let sonuc = 0; //1'den 10a kadar olan sayıların toplamı
for (i = 0; i <= 10; i++) {
    sonuc += i;
}
console.log(sonuc);


let sonuc1 = 0; //0-10 arası çift sayıların toplamı
for (i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        sonuc1 += i;
    }
}
console.log(sonuc1);

//////////////////////////////////////////////


//for in 

// for in array
for (let i in dizi) {
    console.log(`index: ${i} value: ${dizi[i]}`);
}
//for in object
for (let i in people) {
    console.log(`index: ${i} value: ${people[i].firstName}`);
}





//for each
var dizi = ["opel", "toyota", "honda", "bmw", "mercedes"];
dizi.forEach(function (item) {
    console.log(item)
});
//for each object
people.forEach(function (item) {
    console.log(item.firstName)
});

//map() returns an array  

let val = people.map(function (item) {
    return item.firstName + ' ' + item.lastName;
});
console.log(val); //Normalde people değişkenimizin içinde dizi dizinin içinde objeler vardı fakat map metodu ile array yani dizi olarak dönüş alırız.Aynı bir string bir eleman gibi.

let numbers = [1, 2, 5, 6, 8, 9];
let num = numbers.map(function (n) {
    return n * n;
});
console.log(num);