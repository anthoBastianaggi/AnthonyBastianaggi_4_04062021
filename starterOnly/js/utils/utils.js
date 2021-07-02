import { regex } from '../constants/constants.js';

// Check if value is a String
export function isString(val) {
    return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}

// Check if value is an email
export function isEmail(email) {
    if(isString(email)) return regex.regexEmail.test(email.toLowerCase());
}

// Check if value is a number
export function isNumber(val) {
    return typeof val == 'number' || typeof val === "string" && val.trim() !== '' && !isNaN(val)
}

// Function display message error
export function producePrompt(message, id, color) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = color;
}

// Function add message invalid 
export function invalidMessage(element, message, errorClassName, color) {
    element.classList.add('invalid');
    producePrompt(message, errorClassName , color)
}

// Function remove message invalid 
export function removeInvalidMessage(element, message, errorClassName, color) {
    element.classList.remove('invalid');
    producePrompt(message, errorClassName, color)
}

export function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}