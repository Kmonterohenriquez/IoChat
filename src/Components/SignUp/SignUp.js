import React, { Component } from 'react';

class SignUp extends Component {
	state = {};
	render() {
		return (
			<div className='SignUp'>
                <div className="btn-container">
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
				<div className='signup-container'>
                    <input type='text' name='name' placeholder='Full Name' />
                    <input type='text' name='country' placeholder='Country' />
                                <select name="" id="">
                                    <option value="">select Category</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 1</option>
                                </select>
                                <input type="password" name='password' placeholder='password'/>
                                <p><input type="checkbox"/>Yes, I understand and agree to the <span>IoChat Terms & Conditions</span>.</p>
                                <button>Sign Up</button>
                </div>
			</div>
		);
	}
}

export default SignUp;
