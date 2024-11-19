import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul className='flex justify-end pt-6'>
				<li className='pr-4'> 
					<NavLink to='/aboutme'>ABOUT ME</NavLink>
				</li>
				<li className='pr-4'>
					<NavLink to='/projects'>PROJECTS</NavLink>
				</li>
				<li className='pr-8'>
					<NavLink to='/contact'>CONTACT</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
