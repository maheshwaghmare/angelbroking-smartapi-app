import './App.css';
import Login from './pages/login/index'
import React, { useEffect, useState } from 'react';
import Welcome from './components/welcome/index';

const App = () => {

	let [selfState, setSelfState] = useState({
		'authUser': {},
        'user' : {},
    });

	return (
		<div className="ab-api-wrap">
			<div className="ab-api-content">
				<h1>Angle Broking SmartAPI</h1>
				{
					! Object.keys( selfState.user ).length ?
						<Login
							onSuccess={ (authUser, userInfo) => {
								console.log( 'userInfo', userInfo );
								setSelfState( {...selfState, authUser: authUser, user: userInfo } );
							} }
						/>
					: 
						<>
							<Welcome user={selfState.user} />
						</>
				}
			</div>
		</div>
	);
}

export default App;
