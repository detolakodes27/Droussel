import styles from '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import comstyles from '../styles/common.css'    
import b from '../styles/default.css'
import Layout from '../components/layout'
import minstyles from '../styles/bootstrap.min.css'    
import icons from '../b-icon/font/bootstrap-icons.css'
import ani from '../public/css/animate.css'


export default ({Component, pageProps}) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}