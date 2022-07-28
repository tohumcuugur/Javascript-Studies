const ogrenciler = new Map();

ogrenciler.set(1,"ugur tohumcu");
ogrenciler.set("235235235235","mehmet veli");
ogrenciler.set(true,"tolga bulut");

console.log(ogrenciler);//Map(3) {1 => 'ugur tohumcu', '235235235235' => 'mehmet veli', true => 'tolga bulut'}
                        // [[Entries]]
                        // 0: {1 => "ugur tohumcu"}
                        // 1: {"235235235235" => "mehmet veli"}
                        // 2: {true => "tolga bulut"}
                        // size: 3

console.log(ogrenciler.get(1)); //ugur tohumcu
console.log(ogrenciler.get("235235235235")); //mehmet veli key bilgisini verip value değeri alabiliriz.
console.log(ogrenciler.get(true)); // tolga bulut

let sonuc;

sonuc = ogrenciler.size;  // 3
sonuc = ogrenciler.has(1); // true ogrenciler değişkeni 1 key değerine sahip mi ?

ogrenciler.delete(1);
sonuc = ogrenciler.size; // 2 

console.log(sonuc);



for( let x of ogrenciler.keys()){ //235235235235
    console.log(x);               //true             2 key değerini döndürür.
}

for( let x of ogrenciler.values()){ //mehmet veli
    console.log(x);               //tolga bulut      2 value değerini döndürür.
}

for( let x of ogrenciler.entries()){ //(2) ['235235235235', 'mehmet veli']
    console.log(x);               //(2) [true, 'tolga bulut']  key ve value değerlerini birlikte döndürür.
    // console.log(x[0]); şeklinde yazarsak key değerlerini alırız.
    // console.log(x[1]); şeklinde yazarsak value değerlerini alırız.
}

//alternatif
for( let [key,value] of ogrenciler.entries()){ //235235235235 mehmet veli
    console.log(key,value);  // true 'tolga bulut' 
}


let sonuc1 = ogrenciler.size; // Map(0) {size: 0}
ogrenciler.clear();
console.log(ogrenciler);