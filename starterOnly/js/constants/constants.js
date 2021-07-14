export const modalbg = document.querySelector(".bground");
export const modalBtn = document.querySelectorAll(".modal-btn");
export const modalClose = document.querySelector(".close");
export const modalSuccess = document.getElementById('modal-success');
export const modalSuccessClose = document.querySelector(".close-modal-success");
export const btnSuccess = document.getElementById('btn-close-modal');
export const iconMenu = document.getElementById('iconMenu');
export const form = document.getElementById("reserve");
export const firstname = document.getElementById('first');
export const lastname = document.getElementById('last');
export const email = document.getElementById('email');
export const birthdate = document.getElementById('birthdate');
export const quantity = document.getElementById('quantity');
export const locations = document.querySelectorAll(`input[type="radio"][name="location"]`);
export const cgu = document.getElementById('checkbox1');
export const formLocation = document.getElementById('form-location')
export const formCgu = document.getElementById('form-cgu');
export const btn = document.getElementById('btn-submit');
export const regex = {
    regexName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    regexEmail: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    regexNumber: /^(0|[1-9][0-9]?|99)$/,
    regexDate: /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/
}