import "./App.css"
import React from "react";
import { Link, Route, withRouter } from 'react-router-dom';
import Signin from './Signin';
import Account from './Account';
import Logout from './Logout';
import ProtectedRoute from './ProtectedRoute'
import { getToken } from '../utils/api';

function App() {
	const signedIn = getToken()

	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				
				{!signedIn && <Link to='/signin'>Signin</Link>}
				{signedIn && <Link to='/account'>My Account</Link>}
				{signedIn && <Link to='/logout'>Logout</Link>}
			</nav>

			<Route exact path='/signin' component={Signin} />
			<ProtectedRoute exact path='/account' component={Account} />
			<ProtectedRoute exact path='/logout' component={Logout} />
		</div>
	)
}

export default withRouter(App);