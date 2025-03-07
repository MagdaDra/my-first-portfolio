const Navbar = () => {
	return (
		<nav className='bg-[#f2eeea] fixed top-0 left-0 right-0 z-50'>
			<ul className='flex justify-around pt-6 pb-4 text-xs md:justify-end md:text-base'>
				<li className='md:pr-6'>
					<a
						href='/'
					>
						HOME
					</a>
				</li>
				<li className='md:pr-6'>
					<a
						href='/aboutme'
					>
						ABOUT ME
					</a>
				</li>
				<li className='md:pr-6'>
					<a
						href='/projects'
					>
						PROJECTS
					</a>
				</li>
				<li className='md:pr-12'>
					<a
						href='/contact'
					>
						CONTACT
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
