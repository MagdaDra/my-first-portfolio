import { useEffect } from 'react';

const Intro = () => {

	useEffect(() => {
		const element = document.querySelector('.animate-bounce');
		const timer = setTimeout(() => {
			element?.classList.remove('animate-bounce');
		}, 2500);

		return () => clearTimeout(timer); // Cleanup timer on unmount
	}, []);
	
	return (
		<div className='pl-36 pt-20 mb-32'>
			<p className='text-6xl'>Hello,</p>
			<p className='text-6xl mt-4 flex'>
				I am <span className='text-[#7b12ff] animate-bounce ml-4'>Magda</span>,
			</p>
			<p className='text-6xl mt-4'>Full Stack Developer</p>
            <a href='/contact' target='_blank'>
				<button className="mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#f2eeea] px-3 py-1 font-medium text-black backdrop-blur-3xl">
				Lets get in touch
				</span>
				</button>
            </a>
		</div>
	);
};

export default Intro;
