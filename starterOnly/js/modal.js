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
const reserveForm = document.getElementsByName("reserve")[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
closeModal.addEventListener("click", resetForm)

// close modal succes message
closeModalSucess.addEventListener("click", resetForm)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function resetForm() {
  // reset form element defaults
  reserveForm.reset();

  // remove all border of inputs
  for (i = 0; i < formData.length; i++) {
    const input = formData[i].querySelector("input");
    input.classList.remove("border-green");
  }

  modalbg.style.display = "none"; // remove modal
  modalSucces.style.display = "none"; // remove message sucess
  form.style.display = "block"; //display form when user click
}

