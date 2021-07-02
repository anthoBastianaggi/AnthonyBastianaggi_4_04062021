export const modalbg = document.querySelector(".bground");
export const modalBtn = document.querySelectorAll(".modal-btn");
export const modalClose = document.querySelector(".close");
export const iconMenu = document.getElementById('iconMenu');
export const form = document.getElementById("reserve");
export const firstname = document.getElementById('first');
export const lastname = document.getElementById('last');
export const email = document.getElementById('email');
export const quantity = document.getElementById('quantity');
export const cgu = document.getElementById('checkbox1');
export const formLocation = document.getElementById('form-location')
export const formCgu = document.getElementById('form-cgu');
export const btn = document.getElementById('btn-submit');
export const regex = {
    regexName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    regexEmail: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    regexNumber: /^(0|[1-9][0-9]?|99)$/
}