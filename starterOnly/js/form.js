const form = document.getElementById("reserve");
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');

const regex = {
    regexName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    regexEmail: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    regexNumber: /^(0|[1-9][0-9]?|99)$/
}

const errorMessages = {
    firstNameValueMissing: "Veuillez rentrer votre prénom.",
    firstNameValueRegex: "Veuillez rentrer un prénom valide.",
    firstNameValueMinLength: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
    firstNameValueMaxLength: "Prénom trop long. Veuillez entrer un prénom comportant moins de 64 caractères.",
    lastNameValueMissing: "Veuillez rentrer votre nom.",
    lastNameValueRegex: "Veuillez rentrer un nom valide.",
    lastNameValueMinLength: "Veuillez entrer un nom comportant 2 caractères ou plus.",
    lastNameValueMaxLength: "Nom trop long. Veuillez entrer un nom comportant moins de 64 caractères.",
    emailValueMissing: 'Veuillez rentrer votre email.',
    emailValueRegex: 'Veuillez rentrer un email valide.',
    quantityValueMissing: "Veuillez rentrer un nombre.",
    quantityValueRegex: "Veuillez rentrer un nombre valide.",
    quantityValueLength: "Veuillez entrer un nombre compris entre 0 et 99.",
};

// Check if value is a String
function isString(val) {
    return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}

// Check if value is an email
function isEmail(email) {
    if(isString(email)) return regex.regexEmail.test(email.toLowerCase());
}

// Check if value is a number
function isNumber(val) {
    return typeof val == 'number' || typeof val === "string" && val.trim() !== '' && !isNaN(val)
}

// Function display message error
function producePrompt(message, id, color) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = color;
}

// Function add message invalid 
function invalidMessage(element, message, errorClassName, color) {
    element.classList.add('invalid');
    producePrompt(message, errorClassName , color)
}

// Function remove message invalid 
function removeInvalidMessage(element, message, errorClassName, color) {
    element.classList.remove('invalid');
    producePrompt(message, errorClassName, color)
}

// Remove class invalid element ( Firstname, Lastname ) if value element is validate 
function onFocusValueName(element, regex, errorClassName) {
    if(!element.validity.valueMissing && isString(element.value) && regex.test(element.value) && element.value.length >= 2 && element.value.length <= 64) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Remove class invalid element ( Email ) if value element is validate 
function onFocusValueEmail(element, errorClassName) {
    if(!element.validity.valueMissing && isEmail(element.value)) {
        removeInvalidMessage(element, '', errorClassName, 'red');
    }  
}

// Remove class invalid element ( Quantity ) if value element is validate 
function onFocusValueQuantity(element, regex, errorClassName) {
    if(!element.validity.valueMissing && isNumber(element.value) && regex.test(element.value) && element.value.length >= 0 && element.value.length <= 99) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Check validation element ( Firstname , Lastname )
function validateName(element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isString(element.value) || !regex.test(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    } else if (element.value.length < 2) {
        return invalidMessage(element, messageMinLength, errorClassName, color)
    } else if (element.value.length > 64) {
        return invalidMessage(element, messageMaxLength, errorClassName, color)
    } else {
        return true
    }
}

// Check validation element ( email )
function validateEmail(element, errorClassName, color, messageMissing, messageValue) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isEmail(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    } else {
        return true
    }
}

// Check validation element ( quantity )
function validateQuantity(element, errorClassName, color, regex, messageMissing, messageValue, messageLength) {
    if (element.validity.valueMissing) {
        return invalidMessage(element, messageMissing, errorClassName, color)
    } else if (!isNumber(element.value) || !regex.test(element.value)) {
        return invalidMessage(element, messageValue, errorClassName, color)
    } else {
        return true
    }
}

function onFocusInputFirst() {
    return onFocusValueName(firstname, regex.regexName, 'first-error');
}

function onFocusInputLast() {
    return onFocusValueName(lastname, regex.regexName, 'last-error');
}

function onFocusInputEmail() {
    return onFocusValueEmail(email, 'email-error');
}

function onFocusInputQuantity() {
    return onFocusValueQuantity(quantity, regex.regexNumber, 'quantity-error');
}

function onBlurInputFirst() {
    return validateName(
        firstname,  
        'first-error', 
        'red', 
        regex.regexName, 
        errorMessages.firstNameValueMissing, 
        errorMessages.firstNameValueRegex, 
        errorMessages.firstNameValueMinLength, 
        errorMessages.firstNameValueMaxLength
    );
}

function onBlurInputEmail() {
    return validateEmail(email, 'email-error', 'red', errorMessages.emailValueMissing, errorMessages.emailValueRegex);
}

function onBlurInputLast() {
    return validateName(
        lastname,  
        'last-error', 
        'red', 
        regex.regexName, 
        errorMessages.lastNameValueMissing, 
        errorMessages.lastNameValueRegex, 
        errorMessages.lastNameValueMinLength, 
        errorMessages.lastNameValueMaxLength
    )
}

function onBlurInputQuantity() {
    return validateQuantity(
        quantity, 
        'quantity-error', 
        'red',
        regex.regexNumber,
        errorMessages.quantityValueMissing, 
        errorMessages.quantityValueRegex, 
        errorMessages.quantityValueLength
    );
}

/**
 * validate form inputs
 * @returns {boolean}
 */
 function validate() {
	if (
        firstname.validity.valueMissing || lastname.validity.valueMissing || email.validity.valueMissing || 
        quantity.validity.valueMissing
        ) {
        return false
	} else if (
        !isString(firstname.value) || !isString(firstname.value) || !regex.regexName.test(firstname.value) || 
        !regex.regexName.test(lastname.value) || !isEmail(email.value) || !isNumber(quantity.value) || 
        !regex.regexNumber.test(quantity.value)
        ) {
        return false
    } else if (firstname.value.length < 2 || lastname.value.length < 2) {
        return false 
    } else if (firstname.value.length > 64 || lastname.value.length > 64) {
        return false 
    } else {
        return true
    }
}

form.addEventListener("focus", onFocusInputFirst, true);
form.addEventListener("blur", onBlurInputFirst, true);

form.addEventListener("focus", onFocusInputLast, true);
form.addEventListener("blur", onBlurInputLast, true);

form.addEventListener("focus", onFocusInputEmail, true);
form.addEventListener("blur", onBlurInputEmail, true);

form.addEventListener("focus", onFocusInputQuantity, true);
form.addEventListener("blur", onBlurInputQuantity, true);