//Keyboard events
const input = document.querySelector('#txtTaskName');

const form = document.querySelector('form');

const select = document.queryCommandValue('#select');

// input.addEventListener('keydown',eventHandler); //When we press the button it count
// input.addEventListener('keyup',eventHandler); //when we take out our hand from the button it counts
// input.addEventListener('keypress',eventHandler);//it print keypress when we press on the button
// input.addEventListener('focus',eventHandler);  //it print focus when we click on input area.
// input.addEventListener('blue',eventHandler); //it gives blur around of the content like shadow.
// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
//input.addEventListener('select',eventHandler);
select.addEventListener('change', eventHandler);


form.addEventListener('submit', eventHandler); //  when we click on the submit button. İnformation in the form sending form address.But we dont add the form address.Button type should be "SUBMİT". When we add form to <form id="addTaskForm" action="register.aspx"> action page try to go register.aspx.

function eventHandler(e) {
    console.log('event type :' + e.type);
    // console.log('Key code'+e.keyCode); //keyCode shows the number of the code we press for example a is code65.
    // console.log('value : '+e.target.value);
    // e.target.style.backgroundColor = 'red';

    // e.preventDefault(); //**********İMPORTANT*********it prevents page refreshing when we click submit button.
}