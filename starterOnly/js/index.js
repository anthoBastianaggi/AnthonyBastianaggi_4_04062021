import { readTextFile } from './utils/utils.js';
import { firstname, lastname, email, birthdate, quantity, formLocation, formCgu, locations, cgu, btn , regex, form, modalSuccess, modalbg } from './constants/constants.js';
import { validateName, validateEmail, validateQuantity, validateBirthdate, validate } from './validate/validate.js';
import { removeInvalidMessageName, removeInvalidMessageEmail, removeInvalidMessageBirthdate, removeInvalidMessageQuantity, removeInvalidMessageCGU, removeInvalidMessageLocation } from './removeMessage/removeMessage.js';

// Initialize variable data json
var data = null;

//usage:
readTextFile("./json/errorMessages.json", function(text){
    data = JSON.parse(text);
});

firstname.addEventListener("focusout", function() {
    removeInvalidMessageName(firstname, regex.regexName, 'first-error')
}, true);

firstname.addEventListener("blur", function() {
    validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, 
    data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
}, true);

lastname.addEventListener("focusout", function() {
    removeInvalidMessageName(lastname, regex.regexName, 'last-error')
}, true);

lastname.addEventListener("blur", function() { 
    validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, 
    data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
}, true);

email.addEventListener("focusout", function () {
    removeInvalidMessageEmail(email, 'email-error');
}, true)

email.addEventListener("blur", function() {
    validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
}, true);

birthdate.addEventListener("focusout", function () {
    removeInvalidMessageBirthdate(birthdate, regex.regexDate, 'birthdate-error');
}, true)

birthdate.addEventListener("blur", function() {
    validateBirthdate(birthdate, 'birthdate-error', 'red', regex.regexDate, data.birthdateValueMissing, data.birthdateValueRegex, data.birthdateValue, data.birthdateMinValue, data.birthdateMaxValue)
}, true);

quantity.addEventListener("focusout", function() { 
    removeInvalidMessageQuantity(quantity, regex.regexNumber, 'quantity-error')
}, true);

quantity.addEventListener("blur", function() { 
    validateQuantity(quantity, 'quantity-error', 'red', regex.regexNumber, data.quantityValueMissing, 
    data.quantityValueRegex, data.quantityValueLength)
}, true);

Array.prototype.forEach.call(locations, function(radio) {
    radio.addEventListener("change", function() { 
        removeInvalidMessageLocation(formLocation, 'city-error')
    }, true);
});

cgu.addEventListener("change", function() { 
    removeInvalidMessageCGU(cgu, formCgu, 'cgu-error')
}, true);

btn.onclick = function() {
    if(validate()) {
        modalbg.style.display = "none";
        modalSuccess.classList.add('show');
        setTimeout(() => modalSuccess.classList.remove('show'), 2000);
        setTimeout(() => form.submit(), 2000);
    }
};