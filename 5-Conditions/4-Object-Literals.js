//Object Literals


person = {
    firstName : 'Ahmet',
    lastName : 'BOSTANCIBAŞI',
    age : 15,
    hobbies : ['Golf' , 'Tennis'],
    adress: {
        city : 'edirne',
        country: 'Turkey',
    },
    getBirthYear : function(){
        return 2018-this.age //Hangi nesne içinde "this" kullanırsak o nesnenin referansını almış oluruz yani burada person'u işaretlemiş olduk.
    }
}
console.log(person);
console.log(typeof person);

let val ;

val = person.age;
console.log(val);
console.log(typeof val);

val = person.lastName;
console.log(val);
console.log(typeof val);

val = person['firstName'];
console.log(val);
console.log(typeof val);

val = person.hobbies;
console.log(val);
console.log(typeof val);

val = person.hobbies[1];
console.log(val);
console.log(typeof val);

val = person.adress.city;
console.log(val);
console.log(typeof val);

val = person.getBirthYear();
console.log(val);

let people = [ 
                {firstName: 'Ada' , lastName:'Menekşe'},
                {firstName: 'Seda' , lastName:'Gül'},
                {firstName: 'Ece' , lastName:'Taşova'},
]
console.log(people);
console.log(typeof people);


val = people[2];
console.log(val);
console.log(typeof val);