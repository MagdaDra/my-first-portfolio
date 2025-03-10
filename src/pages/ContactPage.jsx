import { LinkedinLogo, GithubLogo } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';


function ContactPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-grow'>
				<h1 className='text-3xl pl-8 md:pl-36 mb-2 pt-24'>Contact</h1>
				<p className='pl-8 md:pl-36 text-xl mb-2 pt-4'>Magdalena Drąszczyk</p>
				<div className='flex pl-8 text-[10px] md:text-sm md:pl-[141px] mt-4'>
					<LinkedinLogo size={16}/>
					<span className='pl-2 hover:underline hover:text-[#7b12ff]'>
						<NavLink to='https://www.linkedin.com/in/magdalenadraszczyk/'>
							https://www.linkedin.com/in/magdalenadraszczyk/
						</NavLink>
					</span>
				</div>
				<div className='flex text-[10px] md:text-sm pl-8 md:pl-[141px] mt-4'>
					<GithubLogo size={16} />
					<span className='pl-2 hover:underline hover:text-[#7b12ff]'>
						<NavLink to='https://github.com/MagdaDra'>
							https://github.com/MagdaDra
						</NavLink>
					</span>
				</div>
			</div>
      <Footer />
		</div>
	);
}

export default ContactPage;
