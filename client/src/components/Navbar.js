import React from 'react';
import { Link } from 'react-router-dom';
import SignInOut from '../auth0/SignInOut';

const Navbar = () => {
	return (
		<div>
			<h2>Navbar</h2>
			<Link to='/'>
				<p>Home</p>
			</Link>
			<Link to='/past'>
				<p>Past</p>
			</Link>
			<SignInOut />
		</div>
	);
};

export default Navbar;
