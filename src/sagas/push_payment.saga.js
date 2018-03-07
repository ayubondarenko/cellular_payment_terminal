/**
 * Created by alexander on 22.01.18.
 */

import {delay} from "redux-saga";
import {call, put, takeLatest} from "redux-saga/effects";
import {checkAllErrors} from "../services/paymentForm.service";
import{send_payment} from "../services/send_payment.api"

function* checkAndPushPayment(action) {
    try {
        let checkResult = yield call(checkAllErrors, action.payload);

        if(checkResult.hasError){
            yield put({type: "DATA_HAS_ERROR", payload: checkResult.form});
            return;
        }
        yield put({type: "START_PAYMENT", payload: {}});
        yield  call(send_payment);
        yield put({type: "PUSH_PAYMENT_SUCCESS", payload: {}});
        yield delay(2000);
        yield put({type: "RETURN_TO_MAIN", payload: {}});

    } catch
        (e) {
        yield put({type: "PUSH_PAYMENT_FAILED", message: e.message});
    }
}


export default function* pushPaymentSaga() {
    yield takeLatest('PUSH_PAYMENT', checkAndPushPayment);
}

