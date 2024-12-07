let emailSignin = document.querySelector("#emailSignin");
let passwordSignin = document.querySelector("#passwordSignin");
let form2 = document.querySelector("#form2");
let alertValdtion = document.querySelector("#alertValdtion");
let alertIncorrect = document.querySelector("#alertIncorrect");

let users = JSON.parse(localStorage.getItem("list")) || [];
console.log(users);

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    if (passwordValdation() == true && emailValdation() == true) {
        let findUser = users.find((user) => user.email === emailSignin.value && user.password === passwordSignin.value);

        if (findUser) {
            logIn(findUser); 
            alertIncorrect.classList.add("d-none");
        } else {
            alertIncorrect.classList.remove("d-none");
        }
    }
});

function logIn(user) {
    localStorage.setItem("currentUser", user.namee);
    window.location.href = 'home.html';
}

function emailValdation() {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailSignin.value == '') {
        alertValdtion.classList.remove("d-none");
        alertIncorrect.classList.add("d-none");
    } else if (emailRegex.test(emailSignin.value) == true) {
        alertValdtion.classList.add("d-none");
        alertIncorrect.classList.add("d-none");
        return true;
    } else {
        alertIncorrect.classList.remove("d-none");
        alertValdtion.classList.add("d-none");
    }
}

function passwordValdation() {
    let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (passwordSignin.value == '') {
        alertValdtion.classList.remove("d-none");
        alertIncorrect.classList.add("d-none");
    } else if (passwordRegex.test(passwordSignin.value) == true) {
        alertValdtion.classList.add("d-none");
        alertIncorrect.classList.add("d-none");
        return true;
    } else {
        alertIncorrect.classList.remove("d-none");
        alertValdtion.classList.add("d-none");
    }
}
