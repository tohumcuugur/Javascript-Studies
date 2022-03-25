//window object

let val;
var a = 10;

function abc() {
    return 0;
}

//alert
//alert('Merhaba');

//prompt

var b = prompt('Bir sayı giriniz');
console.log(b);
//confirm

var con = confirm('Emin misiniz.');
console.log(con);
if (con) {
    console.log('ok');
} else {
    console.log('no');
}



//scrool

val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
//window.location.href='https://www.youtube.com/' // yeni bir sayfaya yönlendirir.
//window.location.reload(); //sayfayı sürekli yeniler


console.log(val);