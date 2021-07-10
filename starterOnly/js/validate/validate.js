import { isString, isEmail, isNumber, invalidMessage } from '../utils/utils.js';
import { firstname, lastname, email, birthdate, quantity, regex, formLocation, formCgu, cgu } from '../constants/constants.js';
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
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isString(element.value) || !regex.test(element.value)) {
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else if (element.value.length < 2) {
        invalidMessage(element, messageMinLength, errorClassName, color)
        return false
    } else if (element.value.length > 64) {   
        invalidMessage(element, messageMaxLength, errorClassName, color)
        return false
    }
    return true
}

// Check validation element ( email )
export function validateEmail(element, errorClassName, color, messageMissing, messageValue) {
    if (element.validity.valueMissing) {
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isEmail(element.value)) {  
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    }
    return true
}

// Check validation element ( birthdate )
export function validateBirthdate(element, errorClassName, color, regex, messageMissing, messageRegexValue, messageValue, messageMinValue, messageMaxValue) {
    var userBirthDate = new Date(element.value);
    var userage = userBirthDate.getFullYear();
    var todayYear = new Date().getFullYear()
    var cutOff8 = todayYear - 8;

    if (element.validity.valueMissing) {  
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!regex.test(element.value)) {
        invalidMessage(element, messageRegexValue, errorClassName, color)
        return false
    } else if(isNaN(Date.parse(element.value))) {
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else if (userage <= 1900) {
        invalidMessage(element, messageMinValue, errorClassName, color)
        return false
    } else if (userage >= cutOff8) {
        invalidMessage(element, messageMaxValue, errorClassName, color)
        return false
    }
    return true
}

// Check validation element ( quantity )
export function validateQuantity(element, errorClassName, color, regex, messageMissing, messageValue) {
    if (element.validity.valueMissing) {
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isNumber(element.value) || !regex.test(element.value)) {
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    }
    return true
}

// Check validation element ( location )
export function validateLocation(element, messageValue, errorClassName, color) {
    const cities = document.querySelectorAll(`input[name="location"]:checked`);

    if(cities.length === 0){
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else {
        return true;
    } 
}

// Check validation element ( CGU )
export function validateCGU(element, messageValue, errorClassName, color) {
    if(!cgu.checked){   
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else {    
        return true
    } 
}

/**
 * validate form inputs
 * @returns {boolean}
 */
export function validate() {
    var fail = !validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
    fail += !validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
    fail += !validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
    fail += !validateBirthdate(birthdate, 'birthdate-error', 'red', regex.regexDate, data.birthdateValueMissing, data.birthdateValueRegex, data.birthdateValue, data.birthdateMinValue, data.birthdateMaxValue)
    fail += !validateQuantity(quantity, 'quantity-error', 'red', regex.regexNumber, data.quantityValueMissing, data.quantityValueRegex, data.quantityValueLength)
    fail += !validateLocation(formLocation, data.cityValueMissing, 'city-error', 'red')
    fail += !validateCGU(formCgu, data.cguValueMissing, 'cgu-error', 'red')
    
    if (fail == "") {
        return true;
    } else {
        return false;
    }  
}
