const AboutMe = () => {
	return (
		<div>
            <h1 className="text-3xl pl-36 mb-2">About me</h1>
			<p className='pl-36 text-justify w-4/5 leading-7'>
				I am a Full Stack Developer with a problem-solving mindset and a
				background in Industrial Engineering. 5 years of experience working in
				e-commerce and tech companies, leading diverse teams and projects. I am
				looking for a job where I can continuously learn and grow my Web
				Development skills.
			</p>
            <h1 className="text-3xl pl-36 mb-2 mt-12">Technologies</h1>
            <ul className='pl-36 mt-10'>
                <li><span className='pl-32 mt-8 hover:text-xl hover:text-[#7b12ff]'>CSS3</span><span className='pl-32 mt-8 text-3xl hover:text-4xl hover:text-[#7b12ff]'>JavaScript</span></li>
                <li className='mt-4'><span className='pl-12 hover:text-xl hover:text-[#7b12ff]'>HTML5</span><span className='pl-28 text-2xl hover:text-3xl hover:text-[#7b12ff]'>React</span> <span className='pl-28 mt-6 hover:text-xl hover:text-[#7b12ff]'>Jasmine</span></li>
                <li className='mt-4 '><span className='hover:text-xl hover:text-[#7b12ff]'>MongoDB</span><span className='pl-12 text-xl hover:text-2xl hover:text-[#7b12ff]'>Express</span><span className='pl-24 mt-4 text-2xl hover:text-3xl hover:text-[#7b12ff]'>Node.js</span><span className='ml-20 hover:text-xl hover:text-[#7b12ff]'>Postman</span></li>
                <li className='mt-6'><span className='pl-24 hover:text-xl hover:text-[#7b12ff]'>GIT</span><span className='pl-24 text-xl hover:text-2xl hover:text-[#7b12ff]'>Tailwind</span><span className='ml-24 hover:text-xl hover:text-[#7b12ff]'>ChakraUI</span></li>
                
            </ul>

		</div>
	);
};

export default AboutMe;
