import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "webpack-icons-installer/bootstrap";
import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import "../css/app.css";
import Main from "./Main";
import Operator from "./Operator";
// import pic from "../images/test.svg";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Redirect exact from="/" to="/main"/>
                    <Route path='/main/' component={Main}/>
                    <Route path='/operator/:name' component={Operator}/>
                </Switch>
            </div>
        );
    }
}

export default App;
