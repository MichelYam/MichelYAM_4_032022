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
const closeModal = document.querySelector(".close");
const modalSucces = document.querySelector(".modal-confimation");
const closeModalSucess = document.getElementById("modal-confimation__close");
const form = document.getElementById('reserve');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// for (i = 0; i < formData.length; i++) {
//   const input = formData[i].querySelector("input");
//   const errorMsg = formData[i].querySelector(".error-message");

//   input.addEventListener("keydown", e => {
//     // errorMsg.style.display = "none";
//     // input.style.border = "none";
//     console.log(e.target.value);
//   })
// }

function resetForm() {
  reserveForm.reset();
  // allErrorMsg.forEach(element => {
  //   element.style.display = "none";
  // })
  modalbg.style.display = "none";
  modalSucces.style.display = "none";
  form.style.display = "block";
  // remove all border of inputs
  first.style.border = "none";
  last.style.border = "none";
  email.style.border = "none";
  birthdate.style.border = "none";
  quantity.style.border = "none";
}
// close modal form
closeModal.addEventListener("click", resetForm)

// close modal succes message
closeModalSucess.addEventListener("click", resetForm)

// evenement l'envoie du formulaire
form.addEventListener("submit", (e) => e.preventDefault());


// 3px #279e7a solid;
