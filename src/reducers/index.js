/**
 * Created by alexander on 15.01.18.
 */
import {combineReducers} from 'redux'
import paymentForm from './paymentForm.reducer'
import operators from './operators.reducer'


export default combineReducers({
    paymentForm,
    operators
});


