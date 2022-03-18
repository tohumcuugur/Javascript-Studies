var trafigeCikis = new Date('4//6/2019');
trafigeCikis.setHours(0, 0, 0, 0) //saat cinsinden değerleri sıfırlayarak
var trafiktekiMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24));

if (trafiktekiGun < 365) {
    console.log('Aracınızın bakım ihtiyacı yok');
} else if (trafiktekiGun >= 365 && trafiktekiGun < 730) {
    console.log('Aracınızın 1.bakım süresi geldi')
} else if (trafiktekiGun >= 730 && trafiktekiGun < 1095) {
    console.log('Aracınızın 2.bakım süresi geldi')
} else {
    console.log(`Aracınıza ${trafiktekiGun}'dür bakım yapılmadı`)
}
console.log(trafiktekiGun);


//////////////////

let result = prompt("Who's There ?")
if (result == ('Cancel')) {
    console.log('Cancelled');
}   
else if (result == ('Admin')) {
    let adminPassword = prompt('Password ?')
    if(adminPassword==('Cancel')){
        console.log('Cancelled');
    }
    else if(adminPassword==('MASTER')){
        console.log('Welcome!');
    }
    else{
        console.log('Wrong Password')
    }
}
else{
    console.log("ı don't know u");
} 


