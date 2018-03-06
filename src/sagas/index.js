/**
 * Created by alexander on 22.01.18.
 */
import axios from "axios";
import {delay} from "redux-saga";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import dataGetSaga from './get_data.saga'
import pushPaymentSaga from './push_payment.saga'
//

export default function* rootSaga() {
    yield all([
        // fork(professionSearchSaga),
        fork(dataGetSaga),
        fork(pushPaymentSaga)
    ])
}