import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Slider = () => {
 
  return(
    {slides.map((slide, index) => (
      <div key={index}>
        <h2>{slide.title}</h2>
        <div>{slide.description}</div>
        <div>
          <img src={slide.img} />
        </div>
      </div>
    ))}
  )
};

export default Slider;
