import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp'

const Auth =()=>{
    return(
        <div className="Auth">
            <div className="Auth-container xsm-container">
                <div className="Auth-left-side">
                    <h1>IoChat</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, alias ipsum aliquam provident quo ex commodi animi eius minus! Facere dignissimos et molestiae accusamus exercitationem nam excepturi error distinctio.</p>
                    <img src="" alt=""/>
                </div>
                <div className="Auth-right-side">
                    <Login/>
                    <SignUp />
                </div>

            </div>
        </div>
    )
}

export default Auth