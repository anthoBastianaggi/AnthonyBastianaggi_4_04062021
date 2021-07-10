import { isString, isEmail, isNumber, removeInvalidMessage } from '../utils/utils.js';
import { validateLocation } from '../validate/validate.js';

// Remove class invalid element ( Firstname, Lastname ) if value element is validate 
export function removeInvalidMessageName(element, regex, errorClassName) {
    if(!element.validity.valueMissing && isString(element.value) && regex.test(element.value) && element.value.length >= 2 && element.value.length <= 64) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Remove class invalid element ( Email ) if value element is validate 
export function removeInvalidMessageEmail(element, errorClassName) {
    if(!element.validity.valueMissing && isEmail(element.value)) {
        removeInvalidMessage(element, '', errorClassName, 'red');
    }  
}

// Remove class invalid element ( Birthdate ) if value element is validate 
export function removeInvalidMessageBirthdate(element, regex, errorClassName) {
    var userage = new Date(element.value).getFullYear();
    var todayYear = new Date().getFullYear()
    var cutOff8 = todayYear - 8;

    if(!element.validity.valueMissing && regex.test(element.value) && userage <= cutOff8 && userage >= 1900) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Remove class invalid element ( Quantity ) if value element is validate 
export function removeInvalidMessageQuantity(element, regex, errorClassName) {
    if(!element.validity.valueMissing && isNumber(element.value) && regex.test(element.value) && element.value.length >= 0 && element.value.length <= 99) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Remove class invalid element ( Location ) if value element is validate 
export function removeInvalidMessageLocation(element, errorClassName) {
    if(validateLocation) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

// Remove class invalid element ( CGU ) if value element is validate 
export function removeInvalidMessageCGU(name, element, errorClassName) {
    if(name.checked) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}
