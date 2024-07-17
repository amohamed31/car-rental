import React from 'react';
import CarPng from '../assets/car1.png';

const About = () => {
	return (
		<div className='bg-white dark:bg-black dark:text-white mx-auto sm:min-h-screen sm:flex sm:items-center'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
					<div
						data-aos='slide-right'
						data-aos-duration='1500'
					>
						<img
							src={CarPng}
							alt='Car'
							className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px 10px 6px rgba(0,0,0,0.50)]'
						/>
					</div>
					<div>
						<div className='space-y-5 sm:p-16 pb-6'>
							<h1
								data-aos='fade-up'
								className='text-3xl sm:text-4xl font-bold font-serif'
							>
								About us
							</h1>
							<p
								data-aos='fade-up'
								className='leading-8 tracking-wide text-gray-800 dark:text-white'
							>
								At Prime Car Rentals, we pride ourselves on offering the best
								car rental services in the region. With a wide range of vehicles
								to choose from, exceptional customer service, and competitive
								pricing, we are committed to making your rental experience as
								smooth and enjoyable as possible. Whether you're traveling for
								business or pleasure, our fleet of well-maintained cars will get
								you where you need to go in style and comfort.
							</p>
							<p
								data-aos='fade-up'
								className='leading-8 tracking-wide text-gray-800 dark:text-white'
							>
								Our mission is to provide our customers with exceptional service
								and value. We offer competitive pricing, flexible rental terms,
								and a variety of add-ons and services to enhance your rental
								experience. Our dedicated team is here to assist you with all
								your rental needs, from choosing the right vehicle to providing
								support throughout your rental period. Thank you for choosing us
								for your car rental needs, and we look forward to serving you.
							</p>
							<button
								data-aos='fade-up'
								className='button-outline'
							>
								<a href='contactus'>Get Started</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
