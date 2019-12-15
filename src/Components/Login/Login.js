import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() {
        return (
            <div className="Login">
                <div className="btn-container">
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
                <div className='Login-container'>
                    <h3>Login</h3> 
                    <span></span>
                    <input type="text" placeholder='Username' name='username'/>
                    <input type="password" placeholder='Password' name='password'/>
                    <div className="forgot-container">
                        <p><input type="checkbox" name='rememberMe'/>Remember me</p>
                        <p>Forgot password?</p>
                    </div>
                    <button>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;