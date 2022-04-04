//event bubbling

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');
  
// form.addEventListener('click',function(e){
//     console.log('form');
//     //e.stopPropagation(); //When we click on input-text area or card or something it shows clicked element class and all the parent classes. By adding stopPropagation we can prevent that.This way only shows the element class where we clicked.
// },true)
// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     //e.stopPropagation();
// },true)//This is the third parametr of the eventlistener.Default is false. When we make it true it shows the elements and parent elements as a reverse. Normally when we click ****form>cardbody>card>container*****.But if we make it true it is showing ******container>card>cardbody>form*******.
// card.addEventListener('click',function(e){
//     console.log('card');
//     //e.stopPropagation();
// },true)
// container.addEventListener('click',function(e){
//     console.log('container');
//     //e.stopPropagation();
// },true)

// const deleteİtems = document.querySelectorAll('.fa-times');

// deleteİtems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })  
// });


//***************************************İMPORTANT!!!!!!!!!!!!!!!!!!!! DELETİNG LİSTİNG ELEMENTS. USEFUL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement);
        e.preventDefault();
    }
});