import { LinkedinLogo, GithubLogo } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

function ContactPage() {
	return (
		<div>
			<h1 className='text-3xl pl-36 mb-2 pt-24'>Contact</h1>
			<p className='pl-36 text-xl mb-2 pt-4'>Magdalena Drąszczyk</p>
      <div className='flex pl-[141px] mt-4'>
        <LinkedinLogo size={32} />
        <span className='pl-2 mt-1 hover:underline hover:text-[#7b12ff]'>
          <NavLink to='https://www.linkedin.com/in/magdalenadraszczyk/'>https://www.linkedin.com/in/magdalenadraszczyk/</NavLink>
        </span>
      </div>
      <div className='flex pl-[141px] mt-4'>
        <GithubLogo size={32} />
        <span className='pl-2 mt-1 hover:underline hover:text-[#7b12ff]'>
          <NavLink to='https://github.com/MagdaDra'>https://github.com/MagdaDra</NavLink>
        </span>
      </div>
			
		</div>
	);
}

export default ContactPage;
