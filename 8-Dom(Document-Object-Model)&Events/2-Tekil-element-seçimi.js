//Selecting elements

// *** Single elements

// Document.getElementById()

// let val;
// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// //val = val.id; //id'si header olan val değerine ulaştık daha sonra val'e attık ve val üzerindende elementlere ulaşabiliriz.
// //val = val.className;

// val.style.fontSize="100px";
// val.style.color="red";
// val.style.fontWeight="bold";
// //val.style.display="none";

// val = document.getElementById('header').innerText='My Todo App'; //header' id sine sahip olan elementin içindeki text'i değiştirmizi sağlar.

// val = document.getElementById('header').innerText='<b>My Todo App</b>';

// val = document.getElementById('header').innerHTML='<b>My Todo App</b>'; // innerHTML eklediğimiz etiketleride yorumlar. Yani burada eklediğimiz b etiketini yorumlayıp yazıya uygular.


// console.log(val);


// *************************************************************************

//document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('div')); //bulduğu ilk divi getirir.
document.querySelector('button').style.color = 'yellow';
//document.querySelector('div:nth-child(1)').style.color = 'blue';
//document.querySelectorAll('div#deneme>:nth-child(2)'.style.color = 'blue') çalışmadı.
document.querySelector('div#deneme>:nth-child(4)').textContent = 'TASK İTEM';
//document.querySelector('div#deneme>:ntn-child(3)').className = 'alert alert-warning alert-dismissible fade show bg-primary'; // var olan classları siler ve yeni klass ekler
document.querySelector('div#deneme>:nth-child(4)').classList.add('bg-primary')// var olan classları silmeden yeni class ekler.






// *** Multiple elements