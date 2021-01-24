//#region validation html inputElement not for custom Combobox and CKEditor
// Đối tượng `Validator`
export function InputElementValidation(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];


        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {

            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;

                default:
                    errorMessage = rules[i](inputElement.value);

            }

            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');

        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {

                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
InputElementValidation.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

InputElementValidation.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

InputElementValidation.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

InputElementValidation.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

InputElementValidation.isNotAllowSpecialCharacter = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(value) ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}
//#endregion

export function defaultFormSubmit(formId) {
    let formSelector = '.form-container';
    let formGroupSelector = '.form-group';
    let validationSelector = '.validation';
    let editorSelector = '.form-cke-editor';
    let comboxSelector = '.form-combobox';
    let inputSelector = '.form-input'; //text input, text area and file :D
let comboxSelectedSelector = " .activated-combox-option"
    //chon tat ca cac combobox co validation
    let comboboxElements = document.querySelectorAll(formId + '>' + formGroupSelector + validationSelector + " " + comboxSelector );
    let editorElements = document.querySelectorAll(formId + '>' + formGroupSelector + validationSelector + " " + editorSelector);
    let inputElements = document.querySelectorAll(formId + '>' + formGroupSelector + validationSelector + " " + editorSelector);

    console.log(comboboxElements);

    // lay gia tri cua combobox va kiem tra.
    Array.from(comboboxElements).forEach(element => {
        console.log(element.innerHTML);
    });

    // kiem tra gia tri mot lan tat ca cac 

    // kiem tra cai nao bi invalid thi khong cho enable nut bam.

    // console.log(comboboxElements);
    let isFormValid = false;

    return isFormValid;
}

