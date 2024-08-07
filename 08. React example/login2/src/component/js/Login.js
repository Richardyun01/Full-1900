import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button, Form, Input, Label} from "reactstrap";
import "../css/Login.css"

const Login = ({history}) => {
    return (
        <div className='form-main'>
            <Form>
                <h2 className='form-signin-heading'>Please sign in</h2>
                <Label for="inputEmail" className='sr-only'>Email address</Label>
                <Input type='email' id='inputEmail' className='form-control' placeholder='Email adress' required autoFocus/>
                <Label for="inputPassword" className='sr-only'>Password</Label>
                <Input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
                <Button className="btn btn-lg btn-block" color="primary" type="button" onClick={() => { 
                    history.push('/main') 
                }}>Sign in</Button>
            </Form>
        </div>
    );
}

export default Login;