import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {Input} from "../Common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxlength20 = maxLengthCreator(20)


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[required, maxlength20]} placeholder={"Email"} name={"email"} component={Input}/></div>
                <div><Field validate={[required, maxlength20]} placeholder={"Password"} name={"password"} component={Input} type={"password"}/></div>
                <div><Field validate={[required, maxlength20]} component={Input} type={"checkbox"} name={"rememberMe"} />Remember me </div>
                <div>
                    <button>Login</button>
                </div>
                {/*<div><Button variant={'contained'} color={"primary"}>Log in</Button></div>*/}
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login =props =>{
    const onSubmit = formData =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <LoginReduxForm onSubmit ={onSubmit}/>
        </div>
    )
};
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);






