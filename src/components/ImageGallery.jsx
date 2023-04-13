import React from 'react';
import { useSelector } from 'react-redux';

const ImageGallery = () => {
  const images = useSelector((state) => state.images);

  return (
    <div className="flex flex-wrap justify-center m-2">
      {images.length > 0 && <img 
        src={images[images.length - 1]} 
        alt="last uploaded image" 
        className="w-[200px] h-[200px] p-2 rounded-lg object-cover object-center shadow-2xl"
        />}
      {images.slice(0, -1).reverse().map((image, index) => (
        <img 
            key={index} 
            src={image} 
            alt={`uploaded image ${index}`} 
            className="w-[200px] h-[200px] p-2 rounded-lg object-cover object-center opacity-80"
        />
      ))}
    </div>
  );
};

export default ImageGallery;