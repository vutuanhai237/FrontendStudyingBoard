import axios from 'axios'

export function isContainSpecialCharacter(str) {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

export function isValidGmail(str) {

}

export function generateHiddenPassword(password) {

}

//For assign token to API for requesting 
export function appendAuthorizationToken(token) {
    if (token) {
        axios.default.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

