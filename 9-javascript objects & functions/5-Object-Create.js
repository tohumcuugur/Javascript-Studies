//Object.create

let personProto = {
    calculateAge: function(){
        2022-this.yearOfBirth;
    }
}
let ugur = Object.create(personProto);

ugur.name = 'ugur';
ugur.yearOfBirth = 1996;
ugur.age = calculateAge();
ugur.job = 'Frontend Developer';

console.log(ugur);