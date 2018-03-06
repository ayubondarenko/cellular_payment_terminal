/**
 * Created by alexander on 03.03.18.
 */

export function paymentFormValidator(fieldName, value, mask) {
    let errMessage;

    if (fieldName === 'phone') {
        if (!value || !value.length)
            errMessage = 'Введите номер телефона.';
        else if (mask) {

            const phoneDigits = value.match(/\d/gi);
            const maskDigits = mask.match(/9/gi);
            if (!phoneDigits || maskDigits.length != phoneDigits.length)
                errMessage = 'Номер телефона должен быть полным.';
            else errMessage = null;

        }

    }

    if (fieldName === 'amount') {
        if (value < 1 || value > 1000) {
            errMessage = 'Cумма должна быть от 1 то 1000 руб.';
        }
        else errMessage = null;
    }
    return errMessage
}

export function checkAllErrors(form) {
    let hasError = false;
    for (const fieldName in form) {
        const field = form[fieldName];
        if (field && field.value != undefined) {
            const mask = form.operator ? form.operator.mask : null;
            field.error = paymentFormValidator(fieldName, field.value, mask);
            form[fieldName] = {...field, error: field.error};
            if (field.error) hasError = true;
        }
    }
    return {hasError: hasError, form: form}
}