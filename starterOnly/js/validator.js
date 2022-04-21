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
const regexName = /^[a-zA-Zéè\s]+$/;


// check if the input is empty
const isEmpty = (dataInput) => {
  return !dataInput.value ? true : false;
}

// show a message in case of error or succes
function showMessage(input, inputBorder, message, result) {
  input.innerText = message; //return the message in the html page
  input.classList.add("displayError");
  if (inputBorder !== false) {
    inputBorder.classList.add('border-red');
    inputBorder.classList.remove('border-green');
  }
  return result;
}

// call function shoMessage to diplay an error message
function showError(input, inputBorder, message) {
  return showMessage(input, inputBorder, message, false);
}
// call this function when all conditions return true , remove all error message and replace the border red to green
function sucess(input, inputBorder) {
  input.classList.remove('displayError'); 
  if (inputBorder !== false) { 
    inputBorder.classList.replace('border-red', 'border-green');
  }
}

//check first name
const checkFirstName = () => {
  if (isEmpty(firstName)) {
    showError(firstNameError, firstName, "Veuillez saisir votre prénom");
  }
  else if (firstName.value.length < 2) {
    showError(firstNameError, firstName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }
  else if (!firstName.value.match(regexName)) {
    showError(firstNameError, firstName, "Veuillez utiliser des lettres")
  }
  else {
    sucess(firstNameError, firstName)
    return true;
  }
}

//check last name
const checkLastName = () => {
  if (isEmpty(lastName)) {
    showError(lastNameError, lastName, "Veuillez entrez votre nom");
  }
  else if (!lastName.value.match(regexName)) {
    showError(lastNameError, lastName, "Veuillez utiliser les lettres de l'aphabet");
  }
  else if (lastName.value.length == 1) {
    showError(lastNameError, lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  else {
    sucess(lastNameError, lastName)
    return true;

  }
}
//check email 
const checkEmail = () => {
  if (isEmpty(email)) {
    showError(emailError, email, "Veuillez entrez votre adresse mail");
  } else if (!email.value.match(emailRegex)) {
    showError(emailError, email, "email invalide");
  } else {
    sucess(emailError, email)
    return true;
  }
}

// check user age
const checkBirthDate = () => {
  const dateUser = new Date(birthDate.value);
  age = currentDate.getFullYear() - dateUser.getFullYear();
  if (isEmpty(birthDate)) {
    showError(dateError, birthDate, "Vous devez entrer votre date de naissance.");
  }
  else if (dateUser.getFullYear() <= 1900) {
    showError(dateError, birthDate, "vous êtes immortel ?")
  }
  else if (dateUser >= currentDate) {
    showError(dateError, birthDate, "Vous venez du futur ?");
  } else {
    sucess(dateError, birthDate)
    return true;
  }
}

// check number of participation
const checkPartipation = () => {
  if (isEmpty(quantity)) {
    showError(quantityError, quantity, "Veuillez entrez un nombre");
  } else {
    sucess(quantityError, quantity)
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
    showError(locationError, false, "Vous devez choisir une option.");
  } else {
    sucess(locationError, false)
    return true;
  }
}

// check if user validate CGU
const checkCGU = () => {
  if (!acceptCGU.checked) {
    showError(cguError, false, "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
    sucess(cguError, false)
    return true;
  }
}

// event submit form
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

  //after event form called,  call event listener if input change (value, select, checkbox) recall fonction to check instantly the new value
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
  } else {
    console.log('failed')
  }
});