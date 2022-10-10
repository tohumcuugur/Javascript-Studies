// login =>username
// posts
// create post

console.log("start");
const serverStatus = true;
const login = (userName , password , successFn , errorFn) =>{
    setTimeout(() =>{ // örnek olarak settime out kullanıyoruz.Gerçek uygulamada database yada kullanmış olduğumuz servisin işlemi gerçekleştirebileceği süreye göre değişecek.
        if (serverStatus){
            successFn({userName: userName ,password, email: "info@ugurtohumcu@hotmail.com"})
        }else{
            errorFn("server kapalı")
        }
    },1000);
}
const getPostsByUserName = (userName,successFn) =>{
    setTimeout(() =>{
        successFn(["post 1" , "post 2" , "post 3"]);
    },2000);
}
const getPostDetails = (post,successFn) =>{
    setTimeout(() =>{
        successFn("post details");
    },3000);
}
login("uğur tohumcu" , "123456" , user => { // successFn dediğimiz işlem için tanımladığımız ek user parametresi login içindeki bilgiyi successFn'a gönderir ve ordanda 2 saniye sonra çıktı alırız.
    console.log(user.userName);
    console.log(user.password);
    console.log(user.email);

    getPostsByUserName(user.userName , (posts) =>{
        console.log(posts);

        getPostDetails(posts[0], (details) =>{
            console.log(details);
        }); //successFnlerin sürekli artmasına ve iç içe karışıklık yaratmasına successFn hell denir.Alternatif yöntem olan promise ve asyc-await yöntemleri daha sık kullanılır.
    });
},error);

function error(msg){
    console.log(msg);
}
console.log("finish");

