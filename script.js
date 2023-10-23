let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789"
let symble = "@#$%^&*()_+=[]{}/\|?";
let Length = "15";
let allchar = upperCase + lowerCase + number + symble;

let inputBox = document.getElementById("password");
let copyIcon = document.getElementById("copyIcon");
let geBtn = document.getElementById("geBtn");

geBtn.addEventListener("click",generatePassword)
copyIcon.addEventListener("click",copyPassword)
  function copyPassword (){
    inputBox.select()
    document.execCommand("copy")
  }
 function generatePassword(){
   let password = "";
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += symble[Math.floor(Math.random() * symble.length)];

   while (Length > password.length){
               password += allchar[Math.floor(Math.random() * allchar.length)];
   }

   inputBox.value = password;
}