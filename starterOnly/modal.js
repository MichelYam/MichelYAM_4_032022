function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const modalSucces = document.querySelector(".modal-confimation");
const modalSuccesClose = document.getElementById("modal-confimation__close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// modal se ferme lorsqu'on clique sur la croix
modalClose.addEventListener('click', e => {
  resetForm.reset()
  modalbg.style.display = "none";
  form.style.display = "block";
  modalSucces.style.display = "none";
})

// Submit
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.getElementsByName("location");
const acceptCGU = document.getElementById('checkbox1');

const firstNameError = document.getElementById('first-error');
const lastNameError = document.getElementById('last-error');
const emailError = document.getElementById('email-error');
const dateError = document.getElementById('date-error');
const quantityError = document.getElementById('quantity-error');
const locationsError = document.getElementById('locations-error');
const cguError = document.getElementById('cgu-error')


const resetForm = document.getElementsByName("reserve")[0];

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById('reserve');
// instance objet date
let currentDate = new Date(); // get the current day

//check first name
const checkFirstName = () => {
  if (isEmpty(firstName)) {
    showError(firstNameError, "Veuillez saisir votre prénom");
  } else {
    return true;
  }
}

//check last name
const checklastName = () => {
  if (isEmpty(lastName)) {
    showError(lastNameError, "Veuillez entrez votre nom");
  } else {
    return true;
  }
}

//check email 
const checkEmail = () => {
  if (isEmpty(email)) {
    showError(emailError, "Veuillez entrez votre adresse mail");
  } else if (email.value.match(emailRegex)) {
    return true;
  } else {
    showError(emailError, "email invalide");
  }
}
// get user age
function getAge(dateUser) {
  var currentYear = currentDate.getFullYear();
  age = currentYear - dateUser.getFullYear();
  return age;
}
// check user age
const checkBirthDate = (dateUser) => {
  if (isEmpty(birthDate)) {
    showError(dateError, "Veuillez entrez votre date de naissance");
  }
  if (dateUser.getFullYear() <= 1900) {
    showError(dateError, "vous êtes immortel ?")
  }
  if (dateUser >= currentDate) {
    showError(dateError, "Vous venez du futur ?");
  }
  if (getAge(dateUser) >= 0 && getAge(dateUser) <= 15) {
    showError(dateError, "Vous êtres trop jeune");
  } else {
    return true;
  }
}
// check number of participation
const checkPartipation = () => {
  if (isEmpty(quantity)) {
    showError(quantityError, "Veuillez entrez un nombre");
  } else {
    return true;
  }
}

// check tournamaent location
const checkLocation = () => {
  var city = "";
  for (let i = 0; i <= locations.length - 1; i++) {
    if (locations[i].checked) {
      city = locations[1].value;
    }
  }
  if (city === "") {
    showError(locationsError, "Veuillez selectionner une ville");
  } else {
    return true
  }
}

// check if user validate CGU
const checkCGU = () => {
  if (!acceptCGU.checked) {
    showError(cguError, "Veuillez accepter les conditions générales d'utilisation")
  } else {
    return true;
  }
}

// check empty input
const isEmpty = (dataInput) => {
  return !dataInput.value ? true : false;
}

// show a message in case of error or succes
function showMessage(input, message, result) {
  input.innerText = message;
  return result;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

// check if everythings is good
form.addEventListener('submit', e => {
  const dateUser = new Date(birthDate.value);
  e.preventDefault();
  checkFirstName()
  checklastName()
  checkEmail()
  checkBirthDate(dateUser)
  checkPartipation()
  checkLocation()
  checkCGU()

  if (checkFirstName() && checklastName() && checkEmail() && checkBirthDate(dateUser) && checkPartipation() && checkLocation() && checkCGU()) {
    modalSucces.style.display = "block";
    form.style.display = "none";
  }
})

for (i = 0; i < formData.length; i++) {
  const inputBalise = formData[i].querySelector("input");
  const errorBalise = formData[i].querySelector(".error-message");

  inputBalise.addEventListener("change", e => {
    errorBalise.style.display = "none";
  })
}
// handle close modal succes message
modalSuccesClose.addEventListener("click", (e) => {
  resetForm.reset()
  modalbg.style.display = "none";
  form.style.display = "block";
  modalSucces.style.display = "none";
})

