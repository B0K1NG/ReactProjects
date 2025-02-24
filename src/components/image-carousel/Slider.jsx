import React, { useState, useEffect, useRef } from 'react';

import Image1 from '../../assets/carousel-assets/chameleon.avif';
import Image2 from '../../assets/carousel-assets/lion.jpg';
import Image3 from '../../assets/carousel-assets/monkey.jpg';

const images = [
    Image1,
    Image2,
    Image3,
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlide, 3000)
    };


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex - 1);
    };

    const handleNextClick = () => {
        nextSlide();
        resetInterval();
    }

    const handlePrevClick = () => {
        prevSlide();
        resetInterval();
    }

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className='carousel'>
            <button className='carousel__button--prev' onClick={handlePrevClick}>
                &#10094;
            </button>
            <div className='carousel__slides'>
                {images.map((image, index) => (
                    <div 
                        className={`carousel__slide ${index === currentIndex ? 'carousel__slide--active' : ''}`}
                        key={index}
                    >
                        <img src={image} 
                        alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div> 
            <button className='carousel__button--next' onClick={handleNextClick}>
                &#10095;
            </button>
            <div className='carousel__indicators'>
                {images.map((_, index) => (
                    <span
                    key={index}
                    className={`carousel__indicator ${index === currentIndex ? 'carousel__indicator--active' : ''}`}
                    onClick={() => {
                        setCurrentIndex(index);
                        resetInterval();
                    }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel