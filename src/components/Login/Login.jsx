import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                       type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                {props.captchaURL && <Field placeholder={"captcha"} name={"captcha"} component={Input}/>}
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.captchaURL && <div><img src={props.captchaURL}/></div>}
            <div>{props.error}</div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>
}
const mapStateToProps = (state) => {
    return {
        captchaURL: state.authData.captchaURL
    }
}

export default connect(mapStateToProps, {login})(Login);