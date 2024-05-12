import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(){
    return (
        <header className={ styles.header }>
            <Link to="/">
                <span>Vasco Flix</span>
            </Link>
            <nav>
                <Link to="/">home</Link>
                <Link to='/search'>pesquisar</Link>
                <Link to='/favorites'>favoritos</Link>
                <Link to='/cadastre'>novo video</Link>
            </nav>
        </header>
    );
}
export default Header;