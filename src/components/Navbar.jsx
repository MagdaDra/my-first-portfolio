const Navbar = () => {
	return (
		<nav>
			<ul className='fixed w-full flex justify-end pt-6'>
				<li className='pr-6'>
					<a
						href='/'
					>
						HOME
					</a>
				</li>
				<li className='pr-6'>
					<a
						href='/aboutme'
					>
						ABOUT ME
					</a>
				</li>
				<li className='pr-6'>
					<a
						href='/projects'
					>
						PROJECTS
					</a>
				</li>
				<li className='pr-12'>
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
