import React, { useState } from 'react';
import { SliderData } from './SliderData';
import '../slide/style.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
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
  
    return (
      <>
        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <section>
                    <div className='content'>

                        <div className='bg'>
                            <span className='title'>{slide.title}</span>
                            <div className='imagem'>
                                <img src={slide.image} alt='travel image'/>
                            </div>
                            <span className='subtitle'>{slide.subtitle}</span>
                        </div>

                        <div className='text'>
                            <h1>{slide.name}</h1>
                            <p>{slide.text}</p>
                            <div className='btns'>
                                <button  onClick={prevSlide} >ANTERIOR</button>
                                <button  onClick={nextSlide} >PROXIMO</button>
                            </div>
                        </div>

                    </div>
                </section>
                
              )}
            </div>
          );
        })}
      </>
    );
  };
  
  export default ImageSlider;