import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import styles from '../../styles/Headers.module.css'

const Headerall = ({articles}) =>{

	console.log(articles)

	return(

		<>

			<div className='container-fluid mt-5'>
				<div className='row justify-content-center mx-5'>
					<div className='col-lg-4'>
						{

				 		articles.map((article, index) => (
				 			<div key={index} className='header2 my-2'>
				 				<div className='shadow-sm card-hover rounded-sm flex-h-new3'>
					 				{!!article.urlToImage && <img src={article.urlToImage}  />}
					 				<a onClick={() => (window.location.href = article.url)} >{article.title}</a>
				 				</div>
				 			</div>
				 		))
			 		}
					</div>

					<div className='col-lg-2 bg-success'>
						lorem
					</div>

					<div className='col-lg-2 bg-primary'>
						lorem
					</div>

					<div className='col-lg-3 bg-primary'>
						lorem
					</div>
				</div>
			</div>

		</>

	)
}


export const getServerSideProps = async pageContext =>{


	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=ng&pageSize=1&category=general`,
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

export default Headerall