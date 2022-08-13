// const sayilar = new Set([1,2,3,4]);
const sayilar = new Set();
sayilar.add(1);
sayilar.add(2);
sayilar.add(3);
sayilar.add(3); // 3'tekrarladığı için sadece bir tanesi dizi içerisinde yer alır.
sayilar.add("4");

sayilar.delete(1);

console.log(sayilar);
console.log(sayilar.has(1)); //false
console.log(sayilar.has(2)); //true
console.log(sayilar.values()); //SetIterator {2, 3, '4'}

for(let x of sayilar.values()){
    console.log(x); 
    // 2
    // 3
    // 4
}



// Set(4) {1, 2, 3, '4'}


const dizi = [...sayilar] // Bu şekilde dizi'ye çeviripte yazdırabiliriz
console.log(dizi);
// (4) [1, 2, 3, '4']


// ******************Map yapısı key value şeklinde obje yapısına göre daha yetenekli bir yapı. Aynı şekilde set bilgiside array yapısına göre kullanabilecek olduğumuz ayrı bir veri yapısı , saklayacabilecek olduğumuz veri yapısı aynı.Sadece tekrarlayan elemanları işin içinden çıkarmak istersek set'i kullanabiliriz.