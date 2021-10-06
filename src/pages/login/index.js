import React, { useEffect, useState } from 'react';
import { SmartAPI } from "smartapi-javascript";

import './style.css';

const Login = ( { onSuccess } ) => {

    let [selfState, setSelfState] = useState({
        'api_key' : '',
        'user_id' : '',
        'password' : '',
        'error' : '',
    })

    const validate = () => {
        
        setSelfState( {...selfState, error: '' } );
        
        let authUser = new SmartAPI({
            api_key: selfState.api_key,
        });

        authUser.generateSession( selfState.user_id , selfState.password)
        .then((data) => {

            if( data.status ) {

                /**
                 * Get User Profile
                 */
                authUser.getProfile().then((response) => {
                    console.log( 'User Data' );
                    console.log( response );
                    if( response.status ) {
                        onSuccess( authUser, response.data );
                    }
                })

            } else {
                setSelfState( {...selfState, error: `[${data.errorcode}] ${data.message}` } );
            }

        })

    }

	return (
		<div className="ab-api-login-form">
			<h2>Login</h2>

            <label>API Key:</label>
            <input type="text" value={selfState.api_key} onChange={ (event) => {
                setSelfState( {...selfState, api_key: event.target.value } );
            }} />
			
            <label>User ID:</label>
            <input type="text" value={selfState.user_id} onChange={ (event) => {
                setSelfState( {...selfState, user_id: event.target.value } );
            }} />
			
            <label>Password:</label>
            <input type="text" value={selfState.password} onChange={ (event) => {
                setSelfState( {...selfState, password: event.target.value } );
            }} />

            {
                selfState.error
                ?
                    <div className="error">Error: {selfState.error}</div>
                :
                    null
            }
			
            <button onClick={validate}>Submit</button>
		</div>
	);
}

export default Login;
