import React from 'react';
import whiteCar from '../assets/white-car.png';
import car2 from '../assets/car5.png';
import car3 from '../assets/car6.png';

const carList = [
	{
		name: 'BMW UX',
		price: 100,
		image: whiteCar,
		aosDelay: '0',
	},
	{
		name: 'KIA UX',
		price: 140,
		image: car2,
		aosDelay: '500',
	},
	{
		name: 'BMW UX',
		price: 100,
		image: car3,
		aosDelay: '1000',
	},
];

const Inventory = () => {
	return (
		<div className='min-h-screen bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
			<section
				id='services'
				className='services-section py-20'
			>
				<div className='container mx-auto px-4 text-center'>
					<h2
						data-aos='fade-up'
						className='text-4xl font-bold mb-6'
					>
						Our Services
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div
							data-aos='fade-up'
							data-aos-delay='0'
							className='service-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg'
						>
							<h3 className='text-2xl font-bold mb-4'>Short-Term Rentals</h3>
							<p>
								Need a car for a day or a week? Our short-term rental options
								are perfect for your quick trips and errands.
							</p>
						</div>
						<div
							data-aos='fade-up'
							data-aos-delay='500'
							className='service-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg'
						>
							<h3 className='text-2xl font-bold mb-4'>Long-Term Rentals</h3>
							<p>
								Planning an extended stay? Enjoy the convenience of having a car
								for a month or more with our long-term rental plans.
							</p>
						</div>
						<div
							data-aos='fade-up'
							data-aos-delay='1000'
							className='service-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg'
						>
							<h3 className='text-2xl font-bold mb-4'>Corporate Rentals</h3>
							<p>
								For businesses looking to rent cars for employees or clients,
								our corporate rental services offer flexible solutions.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='pb-24'>
				<div className='container mx-auto px-4'>
					{/* Heading */}
					<h1
						data-aos='fade-up'
						className='text-3xl text-center sm:text-4xl font-semibold font-serif mb-3'
					>
						Our Fleet
					</h1>
					<p
						data-aos='fade-up'
						data-aos-delay='300'
						className='text-base pb-10'
					>
						Explore our diverse range of vehicles available for rent. Whether
						you need a compact car for city driving or an SUV for your next
						adventure, we have the perfect vehicle to suit your needs.
					</p>
					{/* Car listing */}
					<div>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
							{carList.map((data, index) => (
								<div
									key={index}
									data-aos='fade-up'
									data-aos-delay={data.aosDelay}
									className='space-y-3 border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary p-3 rounded-xl relative group bg-white dark:bg-gray-800'
								>
									<div className='w-full h-[120px]'>
										<img
											src={data.image}
											alt=''
											className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700'
										/>
									</div>
									<div className='space-y-2'>
										<h1 className='text-primary font-semibold'>{data.name}</h1>
										<div className='flex justify-between items-center text-xl font-semibold'>
											<p>${data.price}/Day</p>
											<a
												href='contactus'
												className='text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600'
											>
												Details
											</a>
										</div>
									</div>
									<p className='text-xl font-semibold absolute top-0 left-3'>
										12Km
									</p>
								</div>
							))}
						</div>
					</div>
					{/* End of car listing */}
				</div>
			</div>
		</div>
	);
};

export default Inventory;
