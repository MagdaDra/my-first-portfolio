const Technologies = () => {
	return (
		<div className='flex mt-16 mb-32'>
			<h1 className='text-3xl pl-36 mb-2 mt-16'>Technologies and tools</h1>
			<ul className='pl-12 mt-24 pr-36'>
				<li>
					<span className='pl-32 mt-8 hover:text-xl hover:text-[#7b12ff]'>
						CSS3
					</span>
					<span className='pl-32 mt-8 text-3xl hover:text-4xl hover:text-[#7b12ff]'>
						JavaScript
					</span>
				</li>
				<li className='mt-4'>
					<span className='pl-12 hover:text-xl hover:text-[#7b12ff]'>
						HTML5
					</span>
					<span className='pl-28 text-2xl hover:text-3xl hover:text-[#7b12ff]'>
						React
					</span>{' '}
					<span className='pl-28 mt-6 hover:text-xl hover:text-[#7b12ff]'>
						Jasmine
					</span>
				</li>
				<li className='mt-4 '>
					<span className='hover:text-xl hover:text-[#7b12ff]'>MongoDB</span>
					<span className='pl-12 text-xl hover:text-2xl hover:text-[#7b12ff]'>
						Express
					</span>
					<span className='pl-24 mt-4 text-2xl hover:text-3xl hover:text-[#7b12ff]'>
						Node.js
					</span>
					<span className='ml-20 hover:text-xl hover:text-[#7b12ff]'>
						Postman
					</span>
				</li>
				<li className='mt-6'>
					<span className='pl-24 hover:text-xl hover:text-[#7b12ff]'>GIT</span>
					<span className='pl-24 text-xl hover:text-2xl hover:text-[#7b12ff]'>
						Tailwind
					</span>
					<span className='ml-24 hover:text-xl hover:text-[#7b12ff]'>
						ChakraUI
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Technologies;
