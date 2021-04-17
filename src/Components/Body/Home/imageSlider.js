import React, { useState } from 'react';

import arrow from '../../../img/arrow.svg';
import fav from '../../../img/fav.svg';
import { SliderData } from '../../../Contexts/TrendingContext';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(Math.floor(Math.random() * SliderData.length));
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const width = window.innerWidth;

  if(width >=1024) {
    return (
        <section className='slider'>
            <img src={arrow} className='left-arrow' alt='left-arrow' onClick={prevSlide} />
            <img src={arrow} className='right-arrow' alt='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
            <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
            >
                {index === current && (
                <img src={slide.img} alt={slide.id} className='image' />
                )}

                <div className='description'>
                    <div className='heading'>
                        <h1>{slide.title}</h1>
                        <p>( Price: Rs {slide.price} )</p>
                        <img src={fav} alt="fav" />
                    </div>
                    <p>{slide.description}</p>
                    <div className='buttons'>
                        <input type="button" className='view' value="View" />
                        <input type="button" className='buy' value="Buy" />
                    </div>                
                </div>
            </div>
            );
        })}
        </section>
    );
    } 
    //Mobile View
    else {
        return(
            <section className='mob-slider'>
            <img src={arrow} className='mob-left-arrow' alt='left-arrow' onClick={prevSlide} />
            <img src={arrow} className='mob-right-arrow' alt='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div
                className={index === current ? 'mob-slide mob-active' : 'mob-slide'}
                key={index}
                >
                    {index === current && (
                    <img src={slide.img} alt={slide.id} className='mob-image' />
                    )}

                    <div className='mob-description'>
                        <div className='heading'>
                            <h1>{slide.title}</h1>
                            <p>( Price: Rs {slide.price} )</p>
                        </div>
                        <p>{slide.description}</p>
                        <div className='buttons'>
                            <input type="button" className='buy' value="Buy" />
                            <input type="button" className='view' value="View" />
                            <img src={fav} alt="fav" />
                        </div>  
                    </div>
                </div>
            );
        })}
        </section>
        );
    }
};

export default ImageSlider;