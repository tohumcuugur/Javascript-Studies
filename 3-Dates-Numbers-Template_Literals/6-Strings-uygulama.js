var sentence = '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi eaque doloremque. Iste, aperiam ipsum excepturi saepe alias-labore ex optio-omnis eum atque reiciendis temporibus tempora nesciunt ipsa deleniti?   ';
var url ="http://www.w3 sch ool s.com/"

// cümle kaç karakterlidir?
console.log(sentence.length);

//kaç kelimeden oluşuyor?
console.log(sentence.trim().split(' ')); //Trim ile boşlukları attık daha sonra. split ile aradaki boşluklardan ayırarak kelime sayısını elde ettik.

//Tüm cümleyi küçük harfe çevir.
console.log(sentence.toLocaleLowerCase());

//Cümlenin başındaki ve sonundaki boşlukları siliniz.
sentence = sentence.trim();
console.log(sentence);

// '-' karakterini siliniz.
console.log(sentence.replace('-' ,' '))

// url deki https kısmını cıkartınız.
var cıkart = 'https://'
console.log(url.substring(cıkart.length));

//url hangi protokolu kullanmaktadır = (http yada https)
console.log(url.startsWith('http')); // true false çıktı verir.
console.log(url.startsWith('https'));

//url '.com' ifadesini içeriyormu
console.log(url.indexOf('.com')) // .com ifadesinin nereden itibaren başladığını söyler.    
console.log(url.includes('.com'));//True false değeri döndürür girdiğimiz ifadenin var olup olmadığına bakar.

//url string ifadesini geçerli bir url olarak düzenleyiniz.
 //(' ','-') linkte boşluk bulduğu ilk yeri - ile değiştir.Eğer bütün boşlukların değişmesini istersek (/ /g,'-') olarak kullanabiliriz.
console.log(url.toLowerCase().replace(/ /g ,'-')
                             .replace(/ı/g,'i')
                             .replace(/s/g,'ş')
                             .replace(/u/g,'ü')
                             .replace(/g/g,'ğ')

);
              
