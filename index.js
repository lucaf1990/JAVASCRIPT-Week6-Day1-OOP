let name = document.getElementById("name");
let surname = document.getElementById("surname");
let dateOfBirth = document.getElementById("dateOfBirth");
let tableToFill = document.getElementById("one");
let tableToFill1 = document.getElementById("two");
let tableToFill2 = document.getElementById("three");
let button = document.getElementById("button");

let NewUser = function (name, surname, dateOfBirth) {
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;
};
let user1 = new NewUser();
console.log(user1);

button.onclick = function () {
  user1.name = name.value;
  user1.surname = surname.value;
  user1.dateOfBirth = dateOfBirth.value;
  tableToFill.innerHTML = user1.name;
  tableToFill1.innerHTML = user1.surname;
  tableToFill2.innerHTML = user1.dateOfBirth;
};
console.log(user1);
let y = document.querySelector("div");
let x = document.createElement("p");
x.innerText = "Dang bro scrivo anche con JavascRipt ";
y.appendChild(x);
