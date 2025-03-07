import {Link} from 'react-router-dom'

const MyProjects = () => {
    return (
        <div className='md:flex md:mt-24 md:mb-24'>
            <h1 className='text-3xl pl-8 md:pl-36 mt-12 md:mt-24'>Check out my projects</h1>
            <div className='flex-col justify-items-end md:pr-56'>

                <div className='shadow-[-5px_-6px_5px_rgba(121,22,87,0.3),4px_10px_15px_#9966ff] ml-8 mr-8 md:w-96 hover:w-[450px] mb-10 mt-8'>
                    <Link to='/projects' state={{scrollTo: 'omercado'}}>
                        <img src='/assets/ProjectsPics/oMERCADO/homepage.png' />
                    </Link>
                </div>
                <div className='shadow-[-5px_-6px_5px_rgba(121,22,87,0.3),4px_10px_15px_#9966ff] ml-8 mr-8 md:w-96 hover:w-[450px] mb-10 md:mr-48'>
                    <Link to='/projects' state={{scrollTo: 'tune-tracker'}}>
                        <img src='/assets/ProjectsPics/Screenshot 2024-09-17 at 18.47.32.png' />
                    </Link>
                </div>
                <div className='shadow-[-5px_-6px_5px_rgba(121,22,87,0.3),4px_10px_15px_#9966ff] ml-8 mr-8 md:w-96 hover:w-[450px] mb-8 md:mr-12'>
                    <Link to='/projects' state={{scrollTo: 'food-ninja'}}>
                        <img src='/assets/ProjectsPics/Screenshot 2024-09-17 at 18.53.22.png' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;
