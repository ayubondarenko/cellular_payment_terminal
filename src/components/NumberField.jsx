/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
import SimpleCurrencyInput from "react-simple-currency";

export default class NumberField extends Component {
    onChange = number => {
        this.value = number;
        this.props.onChange(this.props.fieldName, number, this.props.error);
    };
    onBlur = evt => {
        // console.log('NumberField onBlur:',  evt.target.value, this.value, evt)
        if (this.props.onBlur)
            this.props.onBlur(this.props.fieldName, this.value);
    };

    onFocus = evt => {
        // console.log('NumberField onFocus:',  evt.target.value)
        if (this.props.onFocus)
            this.props.onFocus(this.props.fieldName, this.value);
    };

    render() {

        // console.log('рисую поле', this);
        return (
            <div className="col">
                <div className="row text-field input-group">
                    <label class="label flex col-sm-3">{this.props.label}:</label>
                    <div className="flex col-sm-6 ">
                        <SimpleCurrencyInput
                            onInputBlur={(e) => this.onBlur(e)}
                            value={this.value}
                            onInputFocus={(e) => this.onFocus(e)}
                            disabled={this.props.disabled}
                            className={"form-control" + (this.props.error ? " error-fame" : "")}
                            onInputChange={(e) => this.onChange(e)}
                            delimiter=' '
                            separator=''
                            precision={0}
                            unit=''
                        />

                        {this.props.error ?
                            <div class="flex error-field" role="alert">
                                {this.props.error}
                            </div> : "" }
                    </div>
                </div>
            </div>
        )
    }
}