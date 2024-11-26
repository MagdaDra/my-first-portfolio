import {Globe, GithubLogo} from 'phosphor-react';

function ProjectsPage() {
  return (
    <div>
        <div>
            <h1 className='pl-10 pt-6 font-bold text-[28px]'>oMERCADO</h1>

            <p className='pl-10 pt-6 w-3/4'>oMERCADO is an e-commerce store for services with a customer and seller view. The website has authentication feature where user can choose whether to have &apos;customer&apos;, &apos;seller&apos; profile or both. Sellers can add their services to sell and control their stock. Customers can purchase services through the cart function and view their past transactions.</p>
            <div className='flex mt-14 pl-10 mb-14'>
                <a
                	href='https://omercado.netlify.app/'
					target='_blank'
                >
                    <div className='flex flex-col items-center mr-16'>
                        <Globe 
                            size={32}
                        />
                        <h3>Website</h3>
                    </div>
                </a>
                <a
                	href='https://github.com/MagdaDra/oMERCADO_client'
					target='_blank'
                >
                <div className='flex flex-col items-center mr-16'>
                    <GithubLogo 
                        size={32}
                    />
                    <h3>Client Repository Link</h3>     
                </div>
                </a>
                <a
                	href='https://github.com/MagdaDra/oMERCADO_server'
					target='_blank'
                >
                <div className='flex flex-col items-center'>
                    <GithubLogo 
                        size={32}
                    />
                    <h3>Server Repository Link</h3>
                </div>
                </a>
            </div>
            <div>
                <h2 className='pl-10 pt-6 text-[22px]'>Desktop view</h2>
                <div className='flex'>
                    <div>
                    <img className='w-96 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/homepage.png' />
                    </div>
                    <div>
                    <img className='w-96 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/main view.png' />
                    </div>
                    <div>
                    <img className='w-96 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/client dashboard.png' />
                    </div>
                </div>
            </div>

            <div>
                <h2 className='pl-10 pt-12 text-[22px]'>Mobile view</h2>
                <div className='flex'>    
                    <img className='w-48 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/resp homepage.png' />
                    <img className='w-48 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/resp mainpage.png' />
                    <img className='w-48 pl-10 pt-6' src='/src/assets/ProjectsPics/oMERCADO/resp dashboard.png' />
                </div>
            </div>
            <div className='pl-10 pt-6 mb-16'>
                <h2 className='pb-4 pt-8 text-[22px]'>Technologies and tools</h2>
                <p className='mb-2'>Front-end: React, Tailwind</p>
                <p>Back-end: Express, Node.js, MongoDB, Postman</p>
            </div>
        </div>


        <img className='w-96' src='/src/assets/ProjectsPics/Screenshot 2024-09-17 at 18.47.32.png' />
        <img className='w-96' src='/src/assets/ProjectsPics/Screenshot 2024-09-17 at 18.53.22.png' />
    </div>
  )
}

export default ProjectsPage