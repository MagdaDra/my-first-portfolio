const AboutMe = () => {
	return (
		<div>
            <h1 className="text-3xl pl-36 mb-2">About me</h1>
			<p className='pl-36 text-justify pr-36 w-4/5 leading-7'>
				I am a Full Stack Developer with a problem-solving mindset and a
				background in Industrial Engineering. 5 years of experience working in
				e-commerce and tech companies, leading diverse teams and projects. I am
				looking for a job where I can continuously learn and grow my Web
				Development skills.
			</p>
            <h1 className="text-3xl pl-36 mb-2 mt-12">Technologies</h1>
            <ul className='pl-36 mt-10'>
                <li><span className='pl-32 mt-8 hover:text-bold'>CSS3</span><span className='pl-32 mt-8 text-3xl'>JavaScript</span></li>
                <li className='mt-4'><span className='pl-12'>HTML5</span><span className='pl-28 text-2xl'>React</span> <span className='pl-28 mt-6'>Jasmine</span></li>
                <li className='mt-4'><span>MongoDB</span><span className='pl-12 text-xl'>Express</span><span className='pl-24 mt-4 text-2xl'>Node.js</span><span className='ml-20'>Postman</span></li>
                <li className='mt-6'><span className='pl-24'>GIT</span><span className='pl-24 text-xl'>Tailwind</span><span className='ml-24'>ChakraUI</span></li>
                
            </ul>

		</div>
	);
};

export default AboutMe;
