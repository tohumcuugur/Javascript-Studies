console.log("start");

const serverStatus = true;

const login = (userName , password) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{ // örnek olarak settime out kullanıyoruz.Gerçek uygulamada database yada kullanmış olduğumuz servisin işlemi gerçekleştirebileceği süreye göre değişecek.
            if(serverStatus){
                resolve({userName: userName ,password, email: "info@ugurtohumcu@hotmail.com"}) // Sonuç başarılı işe resolve döndürecek
            }else{
                reject("server is offline");
            }
                
        },1000);
    });

}
const getPostsByUserName = (userName) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(["post 1" , "post 2" , "post 3"]);
        },2000)
    })
  ;
}
const getPostDetails = (post) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("post details");
        },3000);
    });
}

//sync

async function displayUser(){
    try{
        const user =  await login("uğur tohumcu" , "123456");
        console.log(user);
        const posts = await getPostsByUserName(user.username);
        console.log(posts);
        const details =  await getPostDetails(posts[0]);
        console.log(details);
    }
    catch(err){
        console.log(err) // reject kısmında yazdığımız hata mesajını yazdırır.
    }
}
displayUser();


console.log("finish");