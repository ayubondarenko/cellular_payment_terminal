/**
 * Created by alexander on 22.01.18.
 */
import axios from "axios";
import {delay} from "redux-saga";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";

//


function* getData(action) {
    try {
        let data = yield  call(axios.get, './db.json');
        yield delay(500); // todo for emulating respond delay

        // yield  call(console.log,'взял данные:', data.data.Operators);
        yield put({type: "GET_OPERATORS_SUCCESS", payload: data.data.Operators});
    } catch
        (e) {
        yield put({type: "GET_OPERATORS_FAILED", message: e.message});
    }
}


export default function* dataGetSaga() {
    yield takeLatest('GET_OPERATORS', getData);
}

