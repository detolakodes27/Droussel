import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Headerall from '../components/headers/Headerall'
import Footer from '../components/footer'
import SectionSubtitle from '../components/SectionSubtitle'


const Home = ({articles, sarticles}) =>{

	console.log(articles, sarticles);

	return(

		<>
			<Navbar/>

			{/*<Headerall/>*/}
			<div className='container-fluid px-5 mt-70'>
				<SectionSubtitle subtitle='Breaking News' />
				<div className='row justify-content-center'>
				{/*	{

				 		articles.map((article, index) => (
				 			<div key={index} className={`${styles.header2} col-lg-3 col-md-6 col-sm-6 col-12 my-1`}>
				 				<div className='shadow-sm card-hover rounded-sm flex-h-new3'>
					 				{!!article.urlToImage && <img src={article.urlToImage}  />}
					 				<a onClick={() => (window.location.href = article.url)} >{article.title}</a>
				 				</div>
				 			</div>
				 		))
			 		}*/}
				</div>
			</div>
			

			<Footer/>
		</>
	)
}

// export const getServerSideProps = async pageContext =>{


// 	const apiResponse = await fetch(
// 		`https://newsapi.org/v2/top-headlines?country=gb&pageSize=12&category=general`,
// 		{
// 			headers: {
// 				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
// 			},
// 		},
// 	);

// 	const apiJson = await apiResponse.json();
// 	const {articles} = apiJson;

// 	return{
// 		props: {
// 			articles,
// 		}
// 	}
// };

export default Home