const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phoneNumber = document.getElementById('phone')
//When user enters information it goes into input's value = "".
//The purpose of the form is to pass the information to the action = "" parameter and send it to the server side.We are not writing server based code so we dont need action ="" in html code.
function error(input, message) {
    input.className = 'form-control is-invalid' //is-invalid is a bootsrap class.it makes border red and create (!) sembol for warning.
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}

function success(input) {
    input.className = 'form-control is-valid'
}

function checkEmail(input) {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Wrong mail adress');
    }
};

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır.`);
    } else if (input.value.length > max) {
        error(input, `en fazla ${max} karakter olmalıdır.`);
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Passwords not same');
    }
}
function checkPhone(input){
    var exp = /^\d{10}$/; // phone number validator-expression..*** İts mean Will be numerical inputs and 10 digits
    if(!exp.test(input.value)){
        error(input,'Number should be 10 digits');
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([userName, email, password, repassword,phoneNumber]);
    checkEmail(email);
    checkLength(userName, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);
});