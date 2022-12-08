import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'



const Footer = () =>{

	return(

		<>

			<div className='container-fluid bg-footer p-5 mt-50'>
				<div className='row justify-content-center'>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6 border-right'>
						<div className=''>
							<a href='/' className='text-white'>Home</a>
						</div>
						<div className='mt-4'>
							<a href='/tech' className='text-white'>Tech</a>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-6 col-6 border-right'>
						<div className=''>
							<a href='/science' className='text-white'>Science</a>
						</div>
						<div className='mt-4'>
							<a href='/health' className='text-white'>Health</a>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-6 col-6 border-right'>
						<div className=''>
							<a href='/business' className='text-white'>Business</a>
						</div>
						<div className='mt-4'>
							<a href='/sports' className='text-white'>Sports</a>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<div className=''>
							<a href='/nigerian' className='text-white'>Nigerian</a>
						</div>
						<div className='mt-4'>
							<a href='/entertainment' className='text-white'>Entertainment</a>
						</div>
					</div>
				</div>

				<div className='col-lg-12 mt-20 border-top'>

				{/*	<div className='col-lg-12  mt-10 text-white'>
						Terms of Use
						About the BBC
						Privacy Policy
						Cookies
						Accessibility Help
						Parental Guidance
						Contact the BBC
						Make an editorial complaint
						BBC emails for you
					</div>*/}
					<div className='flex-h-new4 mt-10'>
						<div className='flex-h text-white'>
							<div>
								Follow us on:
							</div>
							<div>
								<a href='https://facebook.com' className='text-white'>
									<i className='bi-facebook mx-2'></i>
								</a>
							</div>
							<div>
								<a href='https://instagram.com' className='text-white'>
									<i className='bi-instagram mx-2'></i>
								</a>
							</div>
							<div>
								<a href='https://twitter.com' className='text-white'>
									<i className='bi-twitter mx-2'></i>
								</a>
							</div>
						</div>
						<div className='mt-10 text-white'>
							All contents <i className='ri-copyright-line'></i> copyright 2022 Droussel. All rights reserved.
						</div>
					</div>
				</div>
			</div>

		</>
	)
}



export default Footer