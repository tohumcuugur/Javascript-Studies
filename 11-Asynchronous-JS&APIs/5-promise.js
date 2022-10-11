//login =>username
//posts
//create post

console.log("start");

const serverStatus = false;

const login = (userName , password , successFn, errorFn) =>{
    setTimeout(() =>{ // örnek olarak settime out kullanıyoruz.Gerçek uygulamada database yada kullanmış olduğumuz servisin işlemi gerçekleştirebileceği süreye göre değişecek.
        if (serverStatus){
            successFn({userName: userName , email: "info@ugurtohumcu@hotmail.com"})
        }else{
            errorFn("Server Kapalı.");
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
login("uğur tohumcu" , "123456" , user => { // callback dediğimiz işlem için tanımladığımız ek user parametresi login içindeki bilgiyi callback'a gönderir ve ordanda 2 saniye sonra çıktı alırız.
    console.log(user.userName);
    console.log(user.email);

    getPostsByUserName(user.userName , (posts) =>{
        console.log(posts);

        getPostDetails(posts[0], (details) =>{
            console.log(details);
        }); //callbacklerin sürekli artmasına ve iç içe karışıklık yaratmasına callback hell denir.Alternatif yöntem olan promise ve asyc-await yöntemleri daha sık kullanılır.
    });
},(error) =>{
    console.log(error);
}); // virgülden sonra olan kısım hata için gönderilecek kısım



console.log("finish");
