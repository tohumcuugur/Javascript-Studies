//Traversing The dom

let val;
let list = document.querySelector('.list-group');

val = list;

val = list.childNodes; //Gives NodeList.Shows under .list-group elements and shows text spaces.

val = list.children; //Gives HTML COLLECTİON output. and shows only children elements

val = list.childNodes[0];

val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //text.
val = list.childNodes[1].nodeType; // if node type is comment return 8 value , if type is text return 3 , if type is attribute return 2, if type is element return 1. We can use nodeType for type control.

val = list.children;
val = list.children[0];
val = list.children[2];
val = list.children[2].textContent = 'NEW İTEM';
val = list.children[3].children; //Child element under 3.rd element

val = list.firstChild; //Gives text output because we have a text space before li element.So it gives first node
val = list.firstElementChild; // Gives first element so li element.

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; //************* Useful in LOOPS


val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;


val =list.children[0].nextSibling; // Shows next sibling after children[0]
val =list.children[0].nextElementSibling;

val =list.children[1].previousSibling; 
val =list.children[1].previousElementSibling;


for(let i = 0 ;i<list.childNodes.length;i++){

    if(list.childNodes[i].nodeType===1){
        console.log(list.childNodes[i]);
    }
}



//console.log(val);

