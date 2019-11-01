import "./App.css"
import React from "react";
import { Link, Route } from 'react-router-dom';
import Signin from './Signin';

function App() {
	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/signin'>Signin</Link>
			</nav>

			<Route exact path='/signin' component={Signin} />
		</div>
	)
}

export default App