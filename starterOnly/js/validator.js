//get all element for validation
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locationCity = document.getElementsByName("location");
const locations = document.getElementById("locations");
const acceptCGU = document.getElementById('checkbox1');

// all variables to display error messages
const firstNameError = document.getElementById('first-error');
const lastNameError = document.getElementById('last-error');
const emailError = document.getElementById('email-error');
const dateError = document.getElementById('date-error');
const quantityError = document.getElementById('quantity-error');
const locationError = document.getElementById('locations-error');
const cguError = document.getElementById('cgu-error')

let currentDate = new Date(); // get the current day

// regex handle email model
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// regex for handle special characters
const regexName = /^[^@&"'`|°()!_$*€£`+=\/;?#]+$/;


// check if the input is empty
const isEmpty = (dataInput) => {
  return !dataInput.value ? true : false;
}

// show a message in case of error or succes
function showMessage(input, message, result) {
  input.innerText = message;
  input.style.display = "block"
  return result;
}

// call function shoMessage to diplay an error message
function showError(input, message) {
  return showMessage(input, message, false);
}


//check first name
const checkFirstName = () => {
  if (isEmpty(firstName)) {
    showError(firstNameError, "Veuillez saisir votre prénom");
    firstName.style.border = "3px red solid";
  }
  else if (firstName.value.length < 2) {
    showError(firstNameError, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    firstName.style.border = "3px red solid";
  }
  else if (!firstName.value.match(regexName)) {
    showError(firstNameError, "Veuillez utiliser des lettres")
    firstName.style.border = "3px red solid";
  }
  else {
    firstName.style.border = "3px solid #279e7a";
    firstNameError.style.display = "none";
    return true;
  }
}

//check last name
const checkLastName = () => {
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
    lastName.style.border = "3px solid #279e7a";
    lastNameError.style.display = "none";
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
    email.style.border = "3px solid #279e7a";
    emailError.style.display = "none";
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
    birthDate.style.border = "3px solid #279e7a";
    dateError.style.display = "none";
    return true;
  }
}

// check number of participation
const checkPartipation = () => {
  if (isEmpty(quantity)) {
    showError(quantityError, "Veuillez entrez un nombre");
    quantity.style.border = "3px red solid";
  } else {
    quantity.style.border = "3px solid #279e7a";
    quantityError.style.display = "none";
    return true;
  }
}

// check tournamaent location
const checkLocation = () => {
  var city = "";
  for (let i = 0; i < locationCity.length; i++) {
    if (locationCity[i].checked) {
      city = locationCity[i].value;
    }
  }
  if (city === "") {
    showError(locationError, "Vous devez choisir une option.");
  } else {
    locationError.style.display = "none";
    return true;
  }
}

// check if user validate CGU
const checkCGU = () => {
  if (!acceptCGU.checked) {
    showError(cguError, "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
    cguError.style.display = "none";
    return true;
  }
}

// evenement l'envoie du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault()
  // call all validation function
  checkFirstName()
  checkLastName()
  checkEmail()
  checkBirthDate()
  checkPartipation()
  checkLocation()
  checkCGU()

  // call fonction if input change (value, select, checkbox)
  firstName.addEventListener("input", checkFirstName);
  lastName.addEventListener("input", checkLastName);
  email.addEventListener("input", checkEmail);
  birthDate.addEventListener("input", checkBirthDate);
  quantity.addEventListener("input", checkPartipation);
  locations.addEventListener("input", checkLocation);
  acceptCGU.addEventListener("input", checkCGU);

  //check if all validators return true // if true display succes message modal
  if (checkFirstName() && checkLastName() && checkEmail() && checkBirthDate() && checkPartipation() && checkLocation() && checkCGU()) {
    modalSucces.style.display = "block";
    form.style.display = "none";
  }
});