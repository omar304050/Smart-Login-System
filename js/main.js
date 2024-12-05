let form =document.querySelector("#form");
let btnsignup =document.querySelector("#btnsignup");
let alertp  = document.querySelector("#alertp");
let alertsucs = document.querySelector("#alertsucs");
let namee = document.querySelector("#nameInput");
let email = document.querySelector("#emailInput");
let password = document.querySelector("#passwordInput");
let alertValdtion = document.querySelector("#alertValdtion");


let users = JSON.parse(localStorage.getItem("list")) || []
console.log(users);



form.addEventListener("submit" , function(e){
    e.preventDefault()

if (emailValdation() == true && passwordValdation() == true ){

   
     

  
    let emailExist = users.some((user) => user.email == email.value)

    if(emailExist == true ){
       
        alertsucs.classList.add ("d-none")
        alertp.classList.remove("d-none")
    }else{
        users.push({email : email.value , password : password.value , namee : namee.value})
        localStorage.setItem("list" , JSON.stringify(users))
        alertp.classList.add("d-none")
        alertsucs.classList.remove("d-none")

    }







}




})



function emailValdation(){
    let emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email.value) == true){
        alertValdtion.classList.add("d-none")
        return true
    }else{
        alertValdtion.classList.remove("d-none")
    }return false
}

function passwordValdation(){
    let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(passwordRegex.test(password.value)==true){
        alertValdtion.classList.add("d-none")
        return true
    }else{
        alertValdtion.classList.remove("d-none")
    }return false
}





















































































