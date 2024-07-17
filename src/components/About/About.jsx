import React from 'react';
import CarPng from '../../assets/car1.png';

const About = () => {
	return (
		<div className='dark:bg-dark bg-slate-100 mt-10 rounded-xl sm:min-h-[600px] sm:grid sm:place-items-center duration-300'>
			<div className='container'>
				<div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
					<div
						data-aos='slide-right'
						data-aos-duration='1500'
					>
						<img
							src={CarPng}
							alt=''
							className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
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
								className='leading-8 tracking-wide'
							>
								At Prime Car Rentals, we pride ourselves on offering the best
								car rental services in the region. With a wide range of vehicles
								to choose from, exceptional customer service, and competitive
								pricing, we are committed to making your rental experience as
								smooth and enjoyable as possible. Whether you're traveling for
								business or pleasure, our fleet of well-maintained cars will get
								you where you need to go in style and comfort.
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
