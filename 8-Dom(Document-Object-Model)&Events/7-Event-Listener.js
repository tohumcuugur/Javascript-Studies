//event listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');
btn.addEventListener('click',function(e){
    //console.log('Btn-Clicked');
    let val;
    val = e;

    val = e.target; //it shows you which button is clicked.
    val = e.target.id; //Shows the clicked button's id.
    val = e.target.classList;
    val = e.type;// Result is  "click"

    console.log(val);


    e.preventDefault();///*****************İMPORTANT!!!! Before we click on delete button scrool bar was going top of the page because of the "a" tag. a tag is a link tag and trying to do the job and open a new page or something. this is prevent going to link. 
});




// btn.addEventListener('click',btnClick);  //When we lick on delete-all button console print BTN-CLİCKED.
// btn.addEventListener('click',btnClick2); //Now When we click on delete all button both function works and count 2 different click. it prints BTN CLİCKED 
//                                  //BTN 2 CLİCKED
// btn2.addEventListener('click',btnClick);


// function btnClick(){
//     console.log('BTN CLİCKED')
// }

// function btnClick2(){
//     console.log('BTN 2 CLİCKED')
// }