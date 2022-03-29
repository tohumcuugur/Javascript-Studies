let val;
val = document.getElementsByClassName('list-group-item');

// val = document.getElementsByClassName('list-group-item'[0]);
// val = document.getElementsByClassName('list-group-item'[2]);

// val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize = '25px';
// val[2].style.color = 'yellow';
// val[2].textContent = 'NEW İTEM';

// for(let i=0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent = 'NEW İTEMM');
// }


//document.getElementsByTagName()

//val = document.getElementsByTagName('li');//we took it as a class name above,and here we took it as a tag name.Both can be used depending on the situation
//val = document.getElementById('task-list');
//val = val.getElementsByTagName('a'); //This time we write a tags without including 'delete button's "a" tag.
//first we reach ul with  val = document.getElementById('task-list'); than we printed the a tags.
//val = document.getElementById('task-list').getElementsByTagName('a');




//**********************************document.querySelectorAll****************************

//val = document.querySelectorAll('li'); // We put all the li elements into the val variable.

// val.forEach(function(item){  //Than we copy one by one val elements to inside item and printed.So we used this for print all of li elements.
//     console.log(item)
// });
    
// val.forEach(function(item,index){
//     item.textContent = `${index} - hello`
// });

val = document.querySelectorAll('li:nth-child(odd)'); //Reaching of odd-numbered elements of the array

val.forEach(function(item){
    item.style.background = '#ccc'   //with getElementByİd or Tag or Class , we cant use forEach method.Because when we use getelement we get "HTMLCOLLECTİON". but with querySelectors we get "NodeList"

});

console.log(val);