import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";


const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field  placeholder={"Login"} name={"Login"} component={"input"}/></div>
                <div><Field  placeholder={"password"} name={"Password"} component={"input"}/></div>
                <div><Field  component={"input"} type={"checkbox"} name={"Remember me"} />Remember me </div>
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






