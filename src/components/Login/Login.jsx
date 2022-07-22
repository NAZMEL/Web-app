import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { propTypes } from "redux-form";
import { login } from "../../redux/authReducer";
import LoginReduxForm from "./LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
