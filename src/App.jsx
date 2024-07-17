import React, { Component, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/OurServices/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import RootLayout from './layout/RootLayout';
import Inventory from './pages/Inventory';
import AboutPage from './pages/AboutPage';
import Booking from './pages/Booking';
import ContactUs from './pages/ContactUs';

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

			<Routes>
				<Route
					path='/'
					element={<RootLayout />}
				>
					<Route
						index
						element={
							<div>
								<Hero theme={theme} />
								<About />
								<Services />
								<CarList />
								<Testimonial />
								<AppStoreBanner />
								<Contact />
								<Footer />
							</div>
						}
					/>
					<Route
						path='about'
						element={
							<div>
								<AboutPage />
								<Footer />
							</div>
						}
					/>
					<Route
						path='Inventory'
						element={
							<div>
								<Inventory />
								<Footer />
							</div>
						}
					/>
					<Route
						path='booking'
						element={
							<div>
								<Booking />
								<Footer />
							</div>
						}
					/>
					<Route
						path='contactus'
						element={<ContactUs />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
