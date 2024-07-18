import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaLocationArrow,
	FaMobileAlt,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='bg-gray-100 dark:bg-dark mt-1 rounded-t-2xl '>
			<section className='container'>
				<div className=' grid md:grid-cols-3 py-5'>
					{/* company Details */}
					<div className=' py-8 px-4 '>
						<h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif'>
							Prime Car Rental
						</h1>
						<p className='text-sm'>
							Discover your destination with Prime Car Rental, offering
							top-quality vehicles and exceptional service across Mogadishu and
							beyond.
						</p>
						<p className='mt-2'>
							&copy; {new Date().getFullYear()} Prime Car Rental. All rights
							reserved.
						</p>
						<br />
						<div className='flex items-center gap-3'>
							<FaLocationArrow />
							<p>Mogadishu, Somalia</p>
						</div>
						<div className='flex items-center gap-3 mt-3'>
							<FaMobileAlt />
							<p>+252 612345678</p>
						</div>
						{/* Social Handle */}
						<div className='flex items-center gap-3 mt-6'>
							<a href='https://www.instagram.com/'>
								<FaInstagram className='text-3xl hover:text-primary duration-300' />
							</a>
							<a href='https://www.facebook.com/'>
								<FaFacebook className='text-3xl hover:text-primary duration-300' />
							</a>
							<a href='https://www.linkedin.com/'>
								<FaLinkedin className='text-3xl hover:text-primary duration-300' />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
