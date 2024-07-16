import React, { Component, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

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

	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<div className='bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
			<Navbar
				theme={theme}
				setTheme={setTheme}
			/>
			<Hero theme={theme} />
		</div>
	);
};

export default App;
