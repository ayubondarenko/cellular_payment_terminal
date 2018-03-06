/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
import InputMask from "react-input-mask";

export default class StringField extends Component {
    onChange = evt => {
        // console.log('StringField onFocus:', evt.target.value)
        this.props.onChange(this.props.fieldName, evt.target.value, this.props.error);
    };
    onBlur = evt => {
        // console.log('StringField onBlur:', evt.target.value)
        if (this.props.onBlur)
            this.props.onBlur(this.props.fieldName, evt.target.value,this.props.mask );
    };

    onFocus = evt => {
        // console.log('StringField onFocus:', evt.target.value)
        if (this.props.onFocus)
            this.props.onFocus(this.props.fieldName, evt.target.value);
    };


    render() {
        // console.log('рисую поле', this.props);
        return (
            <div className="col">
                <div className="row text-field">
                    <label class="label flex col-sm-3">{this.props.label}:</label>
                    <div className="flex col-sm-6 ">
                        <InputMask
                            mask={this.props.mask}
                            placeholder={this.props.label}
                            disabled={this.props.disabled}
                            className={"form-control " + (this.props.error ? " error-fame" : "")}
                            onBlur={(e) => this.onBlur(e)}
                            onFocus={(e) => this.onFocus(e)}
                            alwaysShowMask={false}
                            onChange={(e) => this.onChange(e)}
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