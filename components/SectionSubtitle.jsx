import React from 'react'
import styles from '../styles/Subtitle.module.css'

const SectionSubtitle = (props) =>{

	return(

		<h5 className={styles.section_subtitle}>{props.subtitle}</h5>

	)
}

export default SectionSubtitle