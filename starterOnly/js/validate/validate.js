import { isString, isEmail, isNumber, invalidMessage, removeInvalidMessage } from '../utils/utils.js';
import { firstname, lastname, email, quantity, regex, formLocation, formCgu, cgu } from '../constants/constants.js';
import { readTextFile } from '../utils/utils.js';

// Initialize variable data json
var data = null;

//usage:
readTextFile("./json/errorMessages.json", function(text){
    data = JSON.parse(text);
});

// Check validation element ( Firstname , Lastname )
export function validateName(element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isString(element.value) || !regex.test(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    } else if (element.value.length < 2) {
        return invalidMessage(element, messageMinLength, errorClassName, color)
    } else if (element.value.length > 64) {
        return invalidMessage(element, messageMaxLength, errorClassName, color)
    }
    return true
}

// Check validation element ( email )
export function validateEmail(element, errorClassName, color, messageMissing, messageValue) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isEmail(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    }
    return true
}

// Check validation element ( quantity )
export function validateQuantity(element, errorClassName, color, regex, messageMissing, messageValue) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isNumber(element.value) || !regex.test(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    }
    return true
}

// Check validation element ( location )
export function validateLocation(name, element, messageValue, errorClassName, color) {
    const cities = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];

    if(cities.length === 0){
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else {
        cities.forEach((checkbox) => {
            values.push(checkbox.value);
        }); 
        removeInvalidMessage(element, '', errorClassName, 'red')
        return values;
    } 
}

// Check validation element ( location )
export function validateCGU(element, messageValue, errorClassName, color) {
    if(!cgu.checked){
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else {
        removeInvalidMessage(element, '', errorClassName, 'red')
        return true;
    } 
}

/**
 * validate form inputs
 * @returns {boolean}
 */
export function validate() {
	if (
        !validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength) &&
        !validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength) &&
        !validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex) &&
        !validateQuantity(quantity, 'quantity-error', 'red', regex.regexNumber, data.quantityValueMissing, data.quantityValueRegex, data.quantityValueLength) &&
        !validateLocation('location', formLocation, data.cityValueMissing, 'city-error', 'red') &&
        !validateCGU(formCgu, data.cguValueMissing, 'cgu-error', 'red')
        ) {
        return false
	} 
    return true
}
