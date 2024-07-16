import React, { Component, useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	// dark mode start
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
	);
	const element = document.documentElement;

	useEffect(() => {
		if (theme === 'dark') {
			element.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			element.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);
	// dark mode end
	return (
		<div>
			<Navbar
				theme={theme}
				setTheme={setTheme}
			/>
		</div>
	);
};

export default App;
