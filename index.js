let name = document.getElementById("name");
let surname = document.getElementById("surname");
let dateOfBirth = document.getElementById("dateOfBirth");
let tableToFill = document.getElementById("one");
let tableToFill1 = document.getElementById("two");
let tableToFill2 = document.getElementById("three");
let button = document.getElementById("button");

let NewUser = (name, surname, dateOfBirth) => {
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;
};

button.onclick = () => {
  tableToFill.innerHTML = name.value;
  tableToFill1.innerHTML = surname.value;
  tableToFill2.innerHTML = dateOfBirth.value;
};
