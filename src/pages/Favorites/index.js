import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

import styles from './Favorites.module.css';

function Favorites(){
    return (
        <>
        <Header />
        <Container>
            <section className={ styles.favorites }>
                <h2>Meus Favoritos</h2>
                <p>Lista de Favoritos</p>
            </section>
        </Container>
        <Footer />
        </>
    );
}

export default Favorites;