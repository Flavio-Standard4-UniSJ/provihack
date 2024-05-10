import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './PageNotFound.module.css';

function PageNotFound(){
    return (
        <>
        <Header />
        <section className={ styles.container }>
            <h3>Ops! Página não localizada.</h3>
            <p className={ styles.page404 }>404</p>
            <p>vasco flix</p>
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound;