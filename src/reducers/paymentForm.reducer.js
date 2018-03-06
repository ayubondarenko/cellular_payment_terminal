/**
 * Created by alexander on 23.01.18.
 */
import {paymentFormValidator} from "../services/paymentForm.validator";
const initData = {
    amount: {
        title: 'Сумма',
        name: 'amount',
        error: null,
        value: '0',
    },

    phone: {
        title: 'Телефон',
        name: 'phone',
        error: null,
        value: '',
    },

    operator: {
        name: "",
        title: "",
        pic: "",
        mask: ""
    },
    paymentStatus: null
};

export default function paymentForm(state = initData, action) {

    if (action.type === 'OPERATOR_SELECTED') {
        // console.log('оператора устанавливаю:', action.payload)
        return {...initData, operator: action.payload};
    }

    if (action.type === 'START_PAYMENT') {

        return {...state, paymentStatus: 'start_payment'};
    }

    if (action.type === 'RETURN_TO_MAIN') {
        return {...state, paymentStatus: 'return_to_main'};
    }

    if (action.type === 'PUSH_PAYMENT_SUCCESS') {
        return {...state, paymentStatus: 'payment_passed'};
    }

    if (action.type === 'PUSH_PAYMENT_FAILED') {
        return {...state, paymentStatus: 'payment_failed'};
    }

    if (action.type === 'DATA_HAS_ERROR') {
        return {...action.payload, paymentStatus: null};
    }


    if (action.type === 'CHANGE_FIELD') {
        // сделал чтобы не рендилось
        state[action.payload.fieldName].value = action.payload.value;
        return state;
    }

    if (action.type === 'CHECK_ERROR') {
        const field = {
            ...state[action.payload.fieldName],
            error: paymentFormValidator(
                action.payload.fieldName,
                action.payload.value,
                action.payload.mask)
        };
        state[action.payload.fieldName] = field;
        return {...state};
        // return Object.assign({}, state, field);
    }

    if (action.type === 'CLEAN_ERROR') {
        const field = {
            ...state[action.payload.fieldName],
            error: false
        };
        state[action.payload.fieldName] = field;
        return {...state, paymentStatus: null};
    }


    return state;

}
