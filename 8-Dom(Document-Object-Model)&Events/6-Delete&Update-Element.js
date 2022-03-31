const taskList = document.querySelector("#task-list");

//*************Removing element*************/

//taskList.remove();
//taskList.childNodes[7].remove(); //deletes last li element.
//taskList.children[2].remove(); // its easier than childnodes.
//taskList.removeChild(taskList.children[3]);



//****************Removing attribute**************/

//taskList.children[0].removeAttribute('class'); // delete class tag in first li element
// for (let i = 0; taskList.children.length; i++) {
//     taskList.children[i].removeAttribute("class"); // we delete all the class attribute in li's
// }


//********************Replacing elements***************************/
//const cardHeader = document.querySelector('.card-header');

//create element

// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader)

// console.log(cardHeader);


//************************Classes**************************************************/
let val;

link = taskList.children[0].children[0]; //tast list(ul) we reach chilren of ul (li) after we reach children of li (a) so we reach a tag

val = link.className;
val = link.classList;
//val = link.classList[0];
//val = link.classList[1];

link.classList.add('NEW');
link.classList.remove('NEW');


//Attributes

val = link.getAttribute('data-id');  // there is a  "a" tag in first li element and have data-id="5" attribute.So we take that attribute and result is printed "5";
val = link.getAttribute('href'); 
val = link.setAttribute('href','https://ugurtohumcu.com');
val = link.hasAttribute('href'); //hasAttribute checks variable has attribute or not. İts giving outpust true and false.

console.log(val);