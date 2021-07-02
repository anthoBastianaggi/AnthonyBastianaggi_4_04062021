import { isString, isEmail, isNumber, removeInvalidMessage } from '../utils/utils.js';

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

// Remove class invalid element ( Quantity ) if value element is validate 
export function removeInvalidMessageQuantity(element, regex, errorClassName) {
    if(!element.validity.valueMissing && isNumber(element.value) && regex.test(element.value) && element.value.length >= 0 && element.value.length <= 99) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}
