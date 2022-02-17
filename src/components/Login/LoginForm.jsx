import React from "react";
import { reduxForm, Field} from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} 
                        name="login" 
                        placeholder="Login"
                        validate={[requiredField]}/>
                </div>
                <div>
                    <Field component={Input} 
                        name="password" 
                        placeholder="Password"
                        validate={[requiredField]}/>
                </div>
                <div>
                    <Field component={Input} name="rememberMe" type={"checkbox"}/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


export default LoginReduxForm;