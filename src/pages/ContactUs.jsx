import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		startDate: '',
		endDate: '',
		vehicleType: '',
		pickupLocation: '',
		dropoffLocation: '',
		notes: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className='min-h-screen bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
			<div className='max-w-lg mx-auto mt-10 p-6 bg-slate-100 rounded-lg shadow-md dark:bg-gray-800'>
				{!submitted ? (
					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Full Name:
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Email Address:
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Phone Number:
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<div>
							<label
								htmlFor='startDate'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Rental Start Date:
							</label>
							<input
								type='date'
								id='startDate'
								name='startDate'
								value={formData.startDate}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<div>
							<label
								htmlFor='endDate'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Rental End Date:
							</label>
							<input
								type='date'
								id='endDate'
								name='endDate'
								value={formData.endDate}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<div>
							<label
								htmlFor='vehicleType'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Vehicle Type:
							</label>
							<select
								id='vehicleType'
								name='vehicleType'
								value={formData.vehicleType}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							>
								<option value=''>Select a vehicle type</option>
								<option value='SUV'>SUV</option>
								<option value='sedan'>Sedan</option>
								<option value='truck'>Truck</option>
								<option value='van'>Van</option>
								<option value='coupe'>Coupe</option>
							</select>
						</div>

						<div>
							<label
								htmlFor='pickupLocation'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Pick-up Location:
							</label>
							<select
								id='pickupLocation'
								name='pickupLocation'
								value={formData.pickupLocation}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							>
								<option value=''>Select a location</option>
								<option value='hodan'>Hodan</option>
								<option value='wadajir'>Wadajir</option>
								<option value='holwadaag'>Holwadaag</option>
								<option value='bondheere'>Bondhere</option>
								<option value='warta nabada'>Warta Nabada</option>
							</select>
						</div>

						<div>
							<label
								htmlFor='dropoffLocation'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Drop-off Location:
							</label>
							<select
								id='dropoffLocation'
								name='dropoffLocation'
								value={formData.dropoffLocation}
								onChange={handleChange}
								required
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							>
								<option value=''>Select a location</option>
								<option value='hodan'>Hodan</option>
								<option value='wadajir'>Wadajir</option>
								<option value='holwadaag'>Holwadaag</option>
								<option value='bondheere'>Bondhere</option>
								<option value='warta nabada'>Warta Nabada</option>
							</select>
						</div>

						<div>
							<label
								htmlFor='notes'
								className='block text-sm font-medium text-gray-700 dark:text-gray-200'
							>
								Additional Notes/Requests:
							</label>
							<textarea
								id='notes'
								name='notes'
								value={formData.notes}
								onChange={handleChange}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
							/>
						</div>

						<button
							type='submit'
							className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
						>
							Submit
						</button>
					</form>
				) : (
					<div className='text-center text-xl leading-loose mx-auto  '>
						<p>
							Thank you, <strong>{formData.name}</strong>!
						</p>
						<p>
							We have received your request to rent a {formData.vehicleType}.
						</p>
						<p>Our team will contact you at {formData.phone} soon.</p>
						<p>
							Your pick-up location is {formData.pickupLocation}, and drop-off
							location is {formData.dropoffLocation}.
						</p>
						<p>{formData.notes ? 'Additional notes: ' + formData.notes : ''}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
