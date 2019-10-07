import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from '../../Image/slide1.jpg';
import slide2 from '../../Image/slide2.jpg';
import slide3 from '../../Image/slide3.jpg';
import slide4 from '../../Image/slide4.jpg';
import slide5 from '../../Image/slide5.jpg';
import slide6 from '../../Image/slide6.jpg';
import slide7 from '../../Image/slide7.jpg';

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={slide1} alt="slide1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide2} alt="slide2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide3} alt="slide3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide4} alt="slide4" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide5} alt="slide5" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide6} alt="slide6" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slide7} alt="slide7" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;