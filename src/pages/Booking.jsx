import React from 'react';

const Booking = () => {
	const teamData = [
		{
			name: 'Abdirahman Ali Odawaa',
			image: '',
			aosDelay: '0',
		},
		{
			name: 'Ali Abdi Mohamed',
			image: '',
			aosDelay: '300',
		},
		{
			name: 'Shafici Ibrahim Nur',
			image: '',
			aosDelay: '1000',
		},
		{
			name: 'Abdullahi Mohamed Jama',
			image: '',
			aosDelay: '1000',
		},
		{
			name: 'Ahmed Abdirashid Ali',
			image: '',
			aosDelay: '1000',
		},
		{
			name: 'Anas Abdirahman Adan',
			image: '',
			aosDelay: '1000',
		},
		{
			name: 'Zakariye Salad Isse',
			image: '',
			aosDelay: '1000',
		},
	];

	return (
		<div className='min-h-screen bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
			<div
				data-aos='zoom-in'
				className='dark:bg-black dark:text-white py-14'
			>
				<div className='container '>
					<div className='grid grid-cols-1 rounded-xl sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6'>
						<div className='col-span-2 space-y-3'>
							<h1 className='text-4xl sm:text-5xl font-bold text-white'>
								Let's collaborate on your upcoming car rental venture
							</h1>
							<p className='text-gray-400'>
								Experience seamless booking and exceptional service for your
								next adventure.
							</p>
						</div>
						<div className='sm:grid sm:place-items-center'>
							<a
								href='contactus'
								className='inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase '
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
			<h1 className='text-xl mb-8 text-center dark:text-white'>
				If you need any help please feel free to contact any memeber from our
				amazing team.
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white'>
				{teamData.map((skill) => (
					<div
						key={skill.name}
						data-aos='fade-up'
						data-aos-delay={skill.aosDelay}
						className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg '
					>
						<div className='grid place-items-center '>
							<img
								src='https://picsum.photos/200'
								alt=''
								className='rounded-full w-20 h-20'
							/>
						</div>
						<p className='text-center font-semibold'>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Booking;
