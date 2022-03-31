//creating elements.

//create element

const li = document.createElement('li');


// add class

li.className = 'list-group-item list-group-item-secondary';

//attribute

li.setAttribute('title','new item');
li.setAttribute('data-id','5'); //Print is = "first entered value = second "

console.log(li);


//text node
 
const text = document.createTextNode('New Text');//We create a text and push it to text variable.
li.appendChild(text);// Than ve add the "text" into li element.

const a =document.createElement('a');
a.setAttribute('href','#');
a.className = 'delete-item float-end';
a.innerHTML = '<i class="fas fa-times"><i/>'; //We need to use innerHTML'in here other wise if we use innerText or textNode browsers cant interpre(yorumlamak) as HTML and u cant see the "X" close mark. 

//append a to li

li.appendChild(a);

//append li to ul

document.querySelector('#task-list').appendChild(li);



