import { LinkedinLogo, GithubLogo } from 'phosphor-react';

function Footer() {
	return (
		<div className='flex justify-center items-end pb-6 bottom-0'>
			<p className='text-[14px] pr-4'>Magdalena Drąszczyk</p>
			<a
				href='https://www.linkedin.com/in/magdalenadraszczyk/'
				target='_blank'
                className='pr-4'>
				<LinkedinLogo size={26} />
			</a>
			<a
				href='https://github.com/MagdaDra'
				target='_blank'
                className='pr-4'>
				<GithubLogo size={26} />
			</a>
		</div>
	);
}

export default Footer;
