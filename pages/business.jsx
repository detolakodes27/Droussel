import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Headerall from '../components/headers/Headerall'
import styles from '../styles/Navbar.module.css'
import SectionSubtitle from '../components/SectionSubtitle'


const Business = ({articles}) =>{

	console.log(articles);

	return(

		<>

			<Navbar/>
			{/*<Headerall/>*/}

			<div className='container mt-100'>
				<SectionSubtitle subtitle='Breaking News' />
				<div className='row justify-content-center'>
					{

				 		articles.map((article, index) => (
				 			<div key={index} className='header2 col-lg-3 col-md-6 col-sm-6 col-10 my-2'>
				 				<div className='shadow-sm card-hover rounded-sm flex-h-new3'>
					 				{!!article.urlToImage && <img src={article.urlToImage}  />}
					 				<a onClick={() => (window.location.href = article.url)} >{article.title}</a>
				 				</div>
				 			</div>
				 		))
			 		}
				</div>
			</div>
		</>
	)
}



export const getServerSideProps = async pageContext =>{


	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=ng&pageSize=12&category=business`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		},
	);

	const apiJson = await apiResponse.json();
	const {articles} = apiJson;

	return{
		props: {
			articles,
		}
	}
};

export default Business