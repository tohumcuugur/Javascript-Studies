//Mouse events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

//************click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//******************Double Click */
btn.addEventListener('dblclick',eventHandler);

//*************************Mouse Down */
btn.addEventListener('mousedown',eventHandler); //When we clicked on event its counting.So not count when we release the mouse click. The moment when we click its count.

//*************************Mouse Up */
// btn.addEventListener('mouseup',eventHandler); //İts count when u release the click.

// //*******************Mouseenter */
// ul.addEventListener('mouseenter',eventHandler);

// //*******************Mouseleave */
// ul.addEventListener('mouseleave',eventHandler);

// //*******************Mouseover */
// ul.addEventListener('mouseover',eventHandler); //Mouse over works on the child elements of the objects.

// //*******************mouseout */
// ul.addEventListener('mouseout',eventHandler);

// Mouse move
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);



function eventHandler(event){
    console.log(`event type: ${event. type}`);
    h5.textContent = `Mouse X : ${event.offsetX} Mouse Y ${event.offsetY}`
    //console.log(event);

}