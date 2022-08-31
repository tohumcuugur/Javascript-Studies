//synchronus

console.log(1);
console.log(2);
console.log(3);


//asynchronous

console.log(1);
setTimeout(() => {
console.log(2);
}, 2000);
console.log(3);

document.getElementById("btn").addEventListener("click", () =>{
    console.log("saved");
});


//api

//callback , promise , asyn-await gibi teknikler var asenkron programlama için.İşlem bittiğinde sürecin başlanması için kullanılıyorlar.
