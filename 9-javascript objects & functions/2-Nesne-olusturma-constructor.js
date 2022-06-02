//object literal
// let ugur = {
//     name: 'ugur',
//     yearOfBirth : 1996,
//     job: 'Front End Developer',

// }
// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2022-this.yearOfBirth;
//     };
//     // console.log(this);
// }

//alternative writing for the first one 
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2022-this.yearOfBirth;
    };
}


let ugur = new Person('Uğur', 1996, 'Front End Developer');
let ufuk = new Person('Ufuk', 1997, 'Front End Developer');

console.log(ugur.name);
console.log(ugur.yearOfBirth);
console.log(ugur.job);
console.log(ugur.calculateAge());

console.log('******************************');

console.log(ufuk.name);
console.log(ufuk.yearOfBirth);
console.log(ufuk.job);
console.log(ufuk.calculateAge());