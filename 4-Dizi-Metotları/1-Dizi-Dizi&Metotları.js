//arrays

let names = ['çınar', 'ahmet', 'mehmet', 'ali'];
let years = [1849, 1870, 2012, 1850];
let mix = [2056, 'ahmet', undefined, 'semih', 2405, ['ayşe', 2009]]


//get array item
console.log(names[0]);
console.log(years[2]);

//set array item
names[0] = 'HALUK'; // Yeni bir eleman eklemek veya var olan elemanı değiştirmek için kullanabiliriz.
names[names.length] = 'İSMET'; //eklemek istediğimiz değişkenin sonuna .lenght ekleyerek yeni elemanlar ekleyebiliriz.veya direk eleman numarası belirterek [5] gibi ekleme  yapabiliriz fakat 3 elemanlı bir diziye misal [5] inci eleman olarak ekleme yaparsak araya yani 4 numaraya boş bir eleman ekler. Yani sonuna ekleme yapmak istiyorsak .lenght kullanımı daha mantıklıdır.
names.push('HAKAN');

//add item

years.push(1996); // .push ile son eleman olarak push edebiliriz.
years.unshift(1999); // . unshift ile ilk eleman olarak gönderebiliriz.

//remove item
years.pop(); // son elemanı siler.
years.shift(); // ilk elemanı siler.

//index of 
let index = names.indexOf('ahmet'); //ahmetin kaçıncı eleman oldugunu yazdırır. arama yaparken kullanılabilir.
console.log('İndex :' + index);

//reverse
names.reverse(); //dizinin ilk elemanıyla son elemanın yerini değiştirir.

//sort
years.sort(); //yıla göre sıralama yapar
names.sort(); //Sıralama yapar.

//concat
let val = years.concat('names', 2025, names); //Dizi , string ifade veya sayısal ifadeyi eklemek için kullanabiliriz.
console.log(val);


console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);

console.log(mix)
console.log(typeof mix);

//splice
console.log(names);
names.splice(2, 1, 'AHMETİ-SİLDİK'); // 2. indexten itibaren 1.elemanı sildik ve yerine ahmeti-sildik yazdık.splice silme veya eleman eklemede kullanılarbilir.
console.log(names);



function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

//find    
let value = years.find(over18);  //sadece true değer olduğunda çıktı veriyor. birden fazla true değer varsa bulduğu en doğru değeri döndürür numbers için 18'den büyük dedik en büyük sayı değerini döndürür.
console.log(value);

//filter
let value1 = years.filter(over18);  // Uygun bulduğu bütün değerleri döndürür.
console.log(value1);

