import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Main extends Component {


    render() {
        return (

            <div >
                <div className="head container-fluid">
                    <h1>Выберите оператора связи</h1>
                </div>
                {/*align-items-center*/}
                <div className="container-fluid">
                    <div className="row justify-content-around ">
                        {this.props.operators ? this.props.operators.map(o => (
                                <div class="col-6 col-sm-4 col-md-3 col-lg-2 "
                                     style={{marginTop: 30}}>
                                    <Link class="size100"
                                          to={'/operator/' + o.name }
                                          onClick={e => {
                                              this.props.onClick(o)
                                          }}>
                                        <div class="size100 operator-btn">
                                            <div class="operator-btn-child">
                                                <img src={"./pics/operators/" + o.pic} alt={o.name}
                                                     className="img-responsive operator-btn-img"/>
                                                <div class="caption">
                                                    <h4>{o.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )) : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({operators: state.operators.data}),
    dispatch => ({

            onClick: (operator) => {
                // console.log("выбрал оператора:", operator)
                dispatch({
                    type: 'OPERATOR_SELECTED', payload: operator
                });

            }
        }
    )
)(Main)