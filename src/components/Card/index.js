import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconUnfavorite from './unfavorite.png';
import { useFavoriteContext } from '../../contexts/Favorites';

function Card({ id }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? iconUnfavorite : iconFavorite;
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt='capa do vídeo' 
                    className={styles.capa} 
                />
            </Link>
            <figure className={styles.figure}>
                <img
                    src={icone}
                    alt='curtir ou descurtir vídeo'
                    onClick={ () => addFavorite({ id })}
                />
            </figure>
        </section>
    );
}

export default Card;