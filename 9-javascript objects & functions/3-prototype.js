//prototype
let person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}
person.prototype.calculateAge = function(){
    return 2018-this.yearOfBirth;
}
person.prototype.getName = function(){
    return this.name;
}
person.prototype.lastName = 'tohumcu';


let emel = new person('emel',1989,'teacher');
console.log(emel);
console.log(emel.calculateAge());
console.log(emel.getName());

console.log('****************')

let faruk = new person('faruk',1996,'engineer')
console.log(faruk);
console.log(faruk.calculateAge());
console.log(faruk.getName());

console.log(emel.hasOwnProperty('lastName'));
console.log(faruk.hasOwnProperty('lastName'));

console.log(emel.lastName);
console.log(faruk.lastName);