import React from "react";
import { reduxForm, Field} from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from "./LoginForm.module.css";

const LoginForm = (props) =>{
    return (
        <div className={style.loginForm}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit} >
                <div className={style.loginFormItem}>
                    <Field component={Input} 
                        name="email" 
                        placeholder="Login"
                        validate={[requiredField]}/>
                </div>
                <div className={style.loginFormItem}>
                    <Field component={Input} 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        validate={[requiredField]}/>
                </div>
                <div className={style.loginFormItem}>
                    <Field component={Input} name="rememberMe" type={"checkbox"} /> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


export default LoginReduxForm;