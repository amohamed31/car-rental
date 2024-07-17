import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default RootLayout;
