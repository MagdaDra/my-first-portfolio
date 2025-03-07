const AboutMe = () => {
	return (
		<div>
            <h1 className="text-3xl pl-8 md:pl-36 mb-2">About me</h1>
			<p className='pl-8 md:pl-36 md:text-justify w-4/5 leading-7'>
			Software Engineer specialised in frontend and backend technologies such as
			JavaScript ES6, React.js, Node.js, Express.js and MongoDB to build robust,
			scalable web applications. Coming from Industrial Engineering background,
			I bring problem-solving, adaptability, teamwork and strong time management
			to every project. I am eager to contribute to a dynamic team where I can
			apply my skills to solve meaningful challenges and continuously grow
			as a developer. Learn more {' '}
				<a
				href='/aboutme'
				target='_blank'
				className='text-[#7b12ff] font-semibold'
				> HERE
				</a>
				.
			</p>
		</div>
	);
};

export default AboutMe;
