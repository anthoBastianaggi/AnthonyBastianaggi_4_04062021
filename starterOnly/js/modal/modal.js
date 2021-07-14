import { modalbg, modalBtn, modalClose, iconMenu, modalSuccess, btnSuccess, modalSuccessClose, form } from '../constants/constants.js';

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.onclick = function() {
  modalbg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  } else if(event.target == modalSuccess) {
    modalSuccess.style.display = "none";
    form.submit();
  }
}

// close modal success form button
btnSuccess.onclick = function() {
  form.submit();
}

// close modal success form icon close
modalSuccessClose.onclick = function() {
  form.submit();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

iconMenu.addEventListener('click', editNav, false );
