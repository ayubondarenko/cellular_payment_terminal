/*
 using:


 <StringFieldContainer
 field= {this.props.user.lastName}
 disabled = {this.props.user.paid}
 />
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import StringField from "../components/StringField";
import NumberField from "../components/NumberField";

//
class StringFieldContainer extends Component {

    onChange = (fieldName, value) => {
        this.props.onChangeField(fieldName, value);
    };

    render() {
        return (
            this.props.mask == 'number' ?
                <NumberField
                    onChange={this.onChange}
                    onBlur={this.props.checkError}
                    onFocus={this.props.cleanError}
                    label={this.props.field.title}
                    disabled={this.props.disabled}
                    fieldName={this.props.field.name}
                    mask={this.props.mask}
                    error={this.props.field.error}
                    value={this.props.field.value}
                />
                :
                <StringField
                    onChange={this.onChange}
                    onBlur={this.props.checkError}
                    onFocus={this.props.cleanError}
                    label={this.props.field.title}
                    disabled={this.props.disabled}
                    fieldName={this.props.field.name}
                    mask={this.props.mask}
                    error={this.props.field.error}
                    value={this.props.field.value}
                />
        );
    }
}

export default connect(state => ({}),
    dispatch => ({
        onChangeField: (fieldName, value) => {
            dispatch({
                type: 'CHANGE_FIELD', payload: {fieldName: fieldName, value: value}
            });
        },
        checkError: (fieldName, value, mask) => {
            dispatch({
                type: 'CHECK_ERROR', payload: {
                    fieldName: fieldName,
                    value: value,
                    mask: mask
                }
            });
        },
        cleanError: (fieldName, value) => {
            dispatch({
                type: 'CLEAN_ERROR', payload: {fieldName: fieldName, value: value}
            });
        }


    })
)(StringFieldContainer)