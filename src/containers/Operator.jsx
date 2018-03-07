import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import StringFieldContainer from "./StringFieldContainer";

class Operator extends Component {
    render() {
        if (this.props.form.paymentStatus == 'return_to_main') {
            this.props.history.push("/main/")
        }

        if (this.props.match.params.name
            && this.props.form.operator.name != this.props.match.params.name) {
            if (this.props.operators && this.props.operators.length
            ) {
                const operatorName = this.props.match.params.name;
                const operator = this.props.operators.filter(o => (o.name == operatorName))[0];
                if (operator)
                    this.props.setOperator(operator);
                else  this.props.setUnknown(operatorName);
            }
        }
        this.disable = this.props.form.paymentStatus == 'payment_passed'
            || this.props.form.paymentStatus == 'start_payment'
            || this.props.form.paymentStatus == 'return_to_main';
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="p-2">
                            <Link
                                class="btn btn-sm btn-outline-primary"
                                to={'/main/'}>
                                <h4>назад</h4>
                            </Link>
                        </div>
                        <div className="ml-auto p-2 ">
                            <img src={"./pics/operators/" + this.props.form.operator.pic}
                                 alt={this.props.form.operator.name}
                                 className="small-logo"/>
                        </div>
                    </div>
                    <div className="head">

                        <h3>Пополнение баланса <b>{this.props.form.operator.title}</b></h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <StringFieldContainer
                        field={this.props.form.amount}
                        mask="number"
                        disabled={this.disable}
                    />

                    <StringFieldContainer
                        field={this.props.form.phone}
                        mask={this.props.form.operator.mask}
                        disabled={this.disable}
                    />
                    <div className="flex text-center">
                        <button type="button"
                                class="btn btn-lg btn-primary"
                                disabled={this.disable}
                                onClick={e => (this.props.pushPayment(this.props.form))}
                        >Оплатить
                        </button>
                    </div>
                    <div class="d-flex justify-content-center">
                        {this.props.form.paymentStatus === 'payment_passed' ?
                            <div className="text-center" style={{color: "green"}}>
                                <h4>Поздравляем. Платеж прошел успешно!</h4><br/>
                                Телефон <b>{this.props.form.phone.value} &nbsp; </b>
                                оплачен на сумму <b>{this.props.form.amount.value}</b> руб.
                            </div>
                            : ""}
                        {this.props.form.paymentStatus === 'payment_failed' ?
                            <div className="text-center " style={{color: "red"}}>
                                <h4>Платеж не прошел! <br/>
                                    Повторите попытку позже.
                                </h4>
                            </div>
                            : ""}
                        {this.props.form.paymentStatus === 'start_payment' ?
                            <div className="text-center flex ">
                                <div class="loader"></div>
                            </div>
                            : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
        form: state.paymentForm,
        operators: state.operators.data
    }),
    dispatch => ({
            setOperator: (operator) => {
                // console.log("выбрал оператора:", operator);
                dispatch({
                    type: 'OPERATOR_SELECTED', payload: operator
                });

            },
            setUnknown: (operatorName) => {
                console.log("Неизвестный оператор:", operatorName);
                dispatch({
                    type: 'RETURN_TO_MAIN', payload: operatorName
                });

            },
            pushPayment: (form) => {
                dispatch({
                    type: 'PUSH_PAYMENT', payload: form
                });

            }

        }
    ))(Operator)