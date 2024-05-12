import Slider from 'react-slick/lib/slider';
import './carousel.css';

function Carousel({ children }){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <div className="slider-container">
            <Slider { ...settings }>
                { children }
            </Slider>
        </div>
    );
}
export default Carousel;