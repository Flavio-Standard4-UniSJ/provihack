import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import favorite from './favorite.png';
import unfavorite from './unfavorite.png';

function Card({ id }){
    return (
        <section className={ styles.card }>
            <Link to={`/watch/${ id }`}>
                <img src={`https://img.youtube.com/vi/${ id }/mqdefault.jpg`} alt='capa do vídeo'  className={ styles.capa } />
            </Link>
            <figure className={ styles.figure }>
                <img src={ favorite } alt='curtir ou descurtir vídeo' />
            </figure>
        </section>
    );
}

export default Card;