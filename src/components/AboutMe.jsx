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
            <ul className='pl-36'>
                <li><span className='pl-32 mt-8'>CSS3</span><span className='pl-32 mt-8 text-3xl'>JavaScript</span></li>
                <li className='mt-4'><span className='pl-48 text-2xl'>React</span> <span className='pl-36 mt-6'> MongoDB</span></li>
                <li><span>Express</span><span className='pl-72 mt-4 text-xl'>Node.js</span></li>
                <li className='pl-36 mt-4'>HTML5</li>
                <li>GIT</li>
                <li>Jasmine</li>
                <li>Postman</li>
                <li>Tailwind</li>
                <li>ChakraUI</li>
            </ul>

		</div>
	);
};

export default AboutMe;
