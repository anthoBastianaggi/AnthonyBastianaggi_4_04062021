import { readTextFile } from './utils/utils.js';
import { firstname, lastname, email, quantity, btn , regex } from './constants/constants.js';
import { validateName, validateEmail, validateQuantity, validate } from './validate/validate.js';
import { removeInvalidMessageName, removeInvalidMessageEmail, removeInvalidMessageQuantity } from './removeMessage/removeMessage.js';

// Initialize variable data json
var data = null;

//usage:
readTextFile("./json/errorMessages.json", function(text){
    data = JSON.parse(text);
});

firstname.addEventListener("focus", function() {
    removeInvalidMessageName(firstname, regex.regexName, 'first-error')
}, true);

firstname.addEventListener("blur", function() {
    validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, 
    data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
}, true);

lastname.addEventListener("focus", function() {
    removeInvalidMessageName(lastname, regex.regexName, 'last-error')
}, true);

lastname.addEventListener("blur", function() { 
    validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, 
    data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
}, true);

email.addEventListener("focus", function () {
    removeInvalidMessageEmail(email, 'email-error');
}, true)

email.addEventListener("blur", function() {
    validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
}, true);

quantity.addEventListener("focus", function() { 
    removeInvalidMessageQuantity(quantity, regex.regexNumber, 'quantity-error')
}, true);

quantity.addEventListener("blur", function() { 
    validateQuantity(quantity, 'quantity-error', 'red', regex.regexNumber, data.quantityValueMissing, 
    data.quantityValueRegex, data.quantityValueLength)
}, true);

btn.addEventListener('click', validate, false );