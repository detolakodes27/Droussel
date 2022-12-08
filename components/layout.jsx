import React, {Fragment} from 'react'
import Link from 'next/link'
// import Meta from '../Meta'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'

const Layout = (props) =>{

	return(
		<Fragment>
			{/*<Meta/>*/}
			{/*<Header/>*/}
			<div>{props.children}</div>
			{/*<Footer/>*/}
		</Fragment>
	)
}

export default Layout