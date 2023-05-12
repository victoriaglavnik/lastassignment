"use strict";
var $ = function(id) {
  return document.getElementById(id);
}
var register = function() {
  var email = $("email_address").value;
  var password1 = $("password_1").value;
  var password2 = $("password_2").value;
  var isValid = true;


if (email == ""){
  $("email_address").nextElementSibling.firstChild.nodeValue =
    "This field is required.";
  isValid = false;
}

if (password1 = ""){
  $("password1").nextElementSibling.firstChild.nodeValue = 
    "This field is required.";
  isValid = false;
}

if (password2 = ""){
  $("password2").nextElementSibling.firstChild.nodeValue = 
    "This field is required.";
  isValid = false;
} else if (password1 != password2){
  $("password2").nextElementSibling.firstChild.nodeValue =
    "This entry must equal first entry.";
  isValid = false;
} else {
  $("password2").nextElementSibling.firstChild.nodeValue = "";
}


//Local storage

if(localStorage.getItem('email')){
  //parse to JSON object

  let obj = JSON.parse(localStorage.getItem('email'))

  document.getElementById('email').value = obj.email
  document.getElementById('password1').value = obj.password1
}

document.getElementById('Register').addEventListener('click', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value 
  let password1 = document.getElementById('password1').value



  //local storage
  localStorage.setItem('email',JSON.stringify(email))

  console.log(JSON.stringify(email))

  alert("Your details are saved in localStorage")

  localStorage.setItem('email', email)
  localStorage.setItem('password1', password1)

  alert("Your details are saved in localStorage")
})
  document.getElementById('clear').addEventListener('click',() => {
    localStorage.removeItem('email')
    localStorage.removeItem('password1')

  })
  if (password1 == password2){
    window.location.href="login.html";
  }
  else{
    alert("Invalid email and Password");
  }



if (isValid == true){
  $("Regestration_form").submit();
}
};
var resetForm = function (){
  $("registration_form").reset();
  $("email_address").nextElementSibling.firstChild.nodeValue = "*";
  $("password1").nextElementSibling.firstChild.nodeValue = "*";
  $("password2").nextElementSibling.firstChild.nodeValue = "*";
  $("password1").focus();


}


window.onload = function() {
  $("Register").onclick = register;
  $("reset_form").onclick = resetForm;
  $("password1").focus();
}