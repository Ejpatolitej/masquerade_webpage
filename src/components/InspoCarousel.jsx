import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function InspoCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      // Dynamically import all images from the 'assets/Carousel' folder
      const imageModules = import.meta.glob(
        '../assets/Carousel/*.{png,jpg,jpeg,svg}'
      );
      const imagePaths = await Promise.all(
        Object.values(imageModules).map(async (importFn) => await importFn())
      );
      setImages(imagePaths.map((mod) => mod.default));
    };

    importImages();
  }, []);

  return (
    <Carousel fade>
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img className='d-block w-100' src={src} alt={`Slide ${index + 1}`} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default InspoCarousel;
