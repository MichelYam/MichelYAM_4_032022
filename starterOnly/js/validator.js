
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
let currentDate = new Date(); // get the current day

const reserveForm = document.getElementsByName("reserve")[0];
const allErrorMsg = document.querySelectorAll(".error-message")
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[a-zA-Z]+$/;


// check empty input
const isEmpty = (dataInput) => {
  return !dataInput.value ? true : false;
}

// show a message in case of error or succes
function showMessage(input, message, result) {
  input.innerText = message;
  // input.style.border = "3px red solid"; 
  return result;
}

function showError(input, message) {
  return showMessage(input, message, false);
}


//check first name
const checkFirstName = () => {
  if (isEmpty(firstName)) {
    showError(firstNameError, "Veuillez saisir votre prénom");
    firstName.style.border = "3px red solid";
  }
  else if (!firstName.value.match(regexName)) {
    showError(firstNameError, "Veuillez utiliser des lettres")
    firstName.style.border = "3px red solid";
  }
  else if (firstName.value.length == 1) {
    showError(firstNameError, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    firstName.style.border = "3px red solid";
  }
  else {
    return true;
  }
}

//check last name
const checklastName = () => {
  if (isEmpty(lastName)) {
    showError(lastNameError, "Veuillez entrez votre nom");
    lastName.style.border = "3px red solid";
  }
  else if (!lastName.value.match(regexName)) {
    showError(lastNameError, "Veuillez utiliser les lettres de l'aphabet");
    lastName.style.border = "3px red solid";
  }
  else if (lastName.value.length == 1) {
    showError(lastNameError, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    lastName.style.border = "3px red solid";
  }
  else {
    return true;
  }
}
//check email 
const checkEmail = () => {
  if (isEmpty(email)) {
    showError(emailError, "Veuillez entrez votre adresse mail");
    email.style.border = "3px red solid";
  } else if (!email.value.match(emailRegex)) {
    showError(emailError, "email invalide");
    email.style.border = "3px red solid";
  } else {
    return true;
  }
}

// check user age
const checkBirthDate = () => {
  const dateUser = new Date(birthDate.value);
  age = currentDate.getFullYear() - dateUser.getFullYear();
  if (isEmpty(birthDate)) {
    showError(dateError, "Vous devez entrer votre date de naissance.");
    birthDate.style.border = "3px red solid";
  }
  else if (dateUser.getFullYear() <= 1900) {
    showError(dateError, "vous êtes immortel ?")
    birthDate.style.border = "3px red solid";
  }
  else if (dateUser >= currentDate) {
    showError(dateError, "Vous venez du futur ?");
    birthDate.style.border = "3px red solid";
  } else {
    return true;
  }
}

// check number of participation
const checkPartipation = () => {
  if (isEmpty(quantity)) {
    showError(quantityError, "Veuillez entrez un nombre");
    quantity.style.border = "3px red solid";
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
    showError(locationsError, "Vous devez choisir une option.");
  } else {
    return true
  }
}

// check if user validate CGU
const checkCGU = () => {
  if (!acceptCGU.checked) {
    showError(cguError, "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
    return true;
  }
}

// check if everythings is good
const validate = () => {
  // e.preventDefault();
  checkFirstName()
  checklastName()
  checkEmail()
  checkBirthDate()
  checkPartipation()
  checkLocation()
  checkCGU()

  if (checkFirstName() && checklastName() && checkEmail() && checkBirthDate() && checkPartipation() && checkLocation() && checkCGU()) {
    modalSucces.style.display = "block";
    form.style.display = "none";
  }
}