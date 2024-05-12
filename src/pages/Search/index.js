import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import SearchVideoList from '../../components/SearchVideoList';

import videos from '../../json/videos.json';

import styles from './Search.module.css';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Search(){
    return (
        <>
        <ScrollToTopButton />
        <Header />
        <Banner image="assistir" />
        <Container>
        <section className={ styles.search }>
            <SearchVideoList videos={ videos }/>
        </section>
        </Container>
        <Footer />
        </>
    );
}
export default Search;