import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {Input} from "../Common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const maxlength20 = maxLengthCreator(20)


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[required, maxlength20]} placeholder={"Login"} name={"Login"} component={Input}/></div>
                <div><Field validate={[required, maxlength20]} placeholder={"password"} name={"Password"} component={Input}/></div>
                <div><Field validate={[required, maxlength20]} component={Input} type={"checkbox"} name={"Remember me"} />Remember me </div>
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
        console.log(formData)
    };
    return (
        <div>
            <h1>LoginPage</h1>
            <LoginReduxForm onSubmit ={onSubmit}/>
        </div>
    )
};

export default Login;






