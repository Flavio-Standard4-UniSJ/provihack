import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card({ id }){
    return (
        <section className={ styles.card }>
            <Link to={`/watch/${ id }`}>
                <img src={`https://img.youtube.com/vi/${ id }/mqdefault.jpg`} alt='capa do vídeo' />
            </Link>
        </section>
    );
}

export default Card;