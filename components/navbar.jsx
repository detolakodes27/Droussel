import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


const NAV_LINK = [
	
	{

		path:'/',
		display:'All'
	},
	{

		path:'/nigerian',
		display:'Nigerian'
	},
	{

		path:'/sports',
		display:'Sports'
	},
	{

		path:'/entertainment',
		display:'Entertainment'
	},
	{

		path:'/health',
		display:'Health'
	},
	{

		path:'/tech',
		display:'Tech'
	},
	{

		path:'/business',
		display:'Business'
	},
	{

		path:'/science',
		display:'Science'
	},
]


const Navbar = () =>{

	// const [headerRef, setHeaderRef] = useState('Droussel');

	// const removeLogo = () => {
	// 	if(headerRef == 'Droussel'){
	// 		setHeaderRef(!headerRef)
	// 	}
	// }
	// const returnLogo = () => {
	// 	if(headerRef != 'Droussel'){
			
	// 		setHeaderRef(!headerRef)
	// 	}
	// }


	const [sidebar, setSidebar] = useState(false);
	const openMenu = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(!sidebar);


	return(

		<>
			<div className={`${styles.ad} flex-h-new3`}>

				<div className='flex-h-new3'>
					Make <h4 className='m-1'>Droussel</h4> Your Homepage
				</div>
				<div className='p-2'>
					Discover something new every day from News, Sports, Finance, Entertainment and more!
				</div>
				<div>
					<button className='primarybtn rounded'>
						<a href='https://playstore.com'>
							Get
						</a>
					</button>
					<button className='secondarybtn ml-4 rounded'>
						<a href=''>
							No, thanks
						</a>
					</button>
				</div>
			</div>

			<div className={`${styles.header} mt-3`}>
				{/*<div className={`${headerRef == 'Droussel' ? returnLogo : removeLogo}  ${styles.header1}`}>
					Droussel!
				</div>*/}

				<div className={`${styles.header1}`}>
					Droussel!
				</div>

				<div className={`${styles.header2} pl-2`}>
					<div className={`${styles.header2a}`}>
						
						{

							NAV_LINK.map((item, index)=>(
								<a href={item.path} key={index} className={`${styles.mylinks}`}>{item.display}</a>
							))

						}

					</div>

					<div className={`${styles.header2b} ml-2`}>
						<div className='flex-h w-100'>
							<input required type = "search" placeholder='search Droussel!' className = "p-3 border w-100 d-block" />	
							<button className='secondarybtn mln px-4 py-3'>
								{/*<a href=''>*/}
									<i className='bi-search text-white'></i>
								{/*</a>*/}
							</button>
						</div>
					</div>
				</div>

				<div className={`${styles.icon}`}>
					<i className={sidebar ? '' : 'bi-filter-right fa-2x px-3'} onClick={openMenu}></i>
				</div>
			</div>

			{/*the mobile navbar starts here*/}

			<div className={sidebar ? 'mob-navbar bg-footer slideInRight zindex' : 'd-none'}>

				<div className='flex-h-new5 px-3 py-4'>
					<div className={`${styles.header1}`}>
						Droussel!
					</div>

					<div className={`${styles.closeicon}`}>
						<i className='bi-x text-white fa-2x' onClick={closeMenu}></i>
					</div>
				</div>

				<div className='py-4 px-3'>
					{
						NAV_LINK.map((item,index)=>(

							<div className='my-5'>
								<a href={item.path} key={index} className='text-white'>{item.display}</a>
							</div>
						))
					}
				</div>

				<div className={`${styles.header2b_mob} ml-3 pb-3`}>
					<div className='flex-h w-90'>
						<input required type = "search" placeholder='search Droussel!' className = "p-3 border w-100 d-block" />	
						<button className='secondarybtn mln px-4 py-3'>
							{/*<a href=''>*/}
								<i className='bi-search text-white'></i>
							{/*</a>*/}
						</button>
					</div>
				</div>
			</div>

		{/*the mobile navbar ends here*/}
		</>
	)
}

export default Navbar