import styles from './Banner.module.css';

function Banner({ image }){
    return (
        <>
        <section 
            className={ styles.banner }
            style={ { backgroundImage: `url('/images/banner-${ image }.jpg')` } }
        ></section>
        </>
    );
}
export default Banner;