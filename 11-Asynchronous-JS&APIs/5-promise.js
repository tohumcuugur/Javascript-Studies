
// const serverStatus = false;
// const promise = new Promise((resolve, reject) =>{ // resolve (successte çalışır) rejectte tam tersi
//     setTimeout(() =>{
//         if(serverStatus){
//             resolve({useranme: "ugurtohumcu"})
//         }else{
//             reject("Login error");
//         }
//     },2000)
// });

// promise.then(user =>{
//     console.log(user);
// }).catch(err =>{
//     console.log(err);
// })

// .then metodu ile resolve ile gönderilen metodu çekebiliriz.
// catch metodu ise reject'ten dönen değeri yakalar

////////////********************************************************/////////////////////////////////////////////////////


console.log("start");
const serverStatus = false;

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

login("uğurTohumcu" ,"123465")
    .then((user) =>{
        console.log(user);
        return getPostsByUserName(user.userName)
    })
    .then (post =>{
        console.log(post);
        return getPostDetails(post[0]);
    })
    .then (details =>{
        console.log(details);
    }).catch (err =>{
        console.log(err);
    });






// login("uğur tohumcu" , "123456" , user => { // callback dediğimiz işlem için tanımladığımız ek user parametresi login içindeki bilgiyi callback'a gönderir ve ordanda 2 saniye sonra çıktı alırız.
//     console.log(user.userName);
//     console.log(user.password);
//     console.log(user.email);

//     getPostsByUserName(user.userName , (posts) =>{
//         console.log(posts);

//         getPostDetails(posts[0], (details) =>{
//             console.log(details);
//         }); //callbacklerin sürekli artmasına ve iç içe karışıklık yaratmasına callback hell denir.Alternatif yöntem olan promise ve asyc-await yöntemleri daha sık kullanılır.
//     });
// });

console.log("finish");
