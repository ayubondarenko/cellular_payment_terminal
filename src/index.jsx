import 'bootstrap'
import "babel-polyfill";
import React from "react";
import ReactDOM, {render} from "react-dom";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./sagas";
import reducer from "./reducers";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./containers/App.jsx";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


store.dispatch({type: 'GET_OPERATORS', payload: {}});
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
    , document.getElementById('app'));
// registerServiceWorker();
