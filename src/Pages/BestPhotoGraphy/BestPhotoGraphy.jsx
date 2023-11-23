import React, { useState } from 'react';
import './bestp.css'; // Make sure to import your stylesheet
import tiger from "../../Assests/BestPhotoGraphy/tiger.jpg";
import tiger2 from "../../Assests/BestPhotoGraphy/tiger2.jpg";
import tiger3 from "../../Assests/BestPhotoGraphy/tiger3.png"

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageContainerHover = (index) => {
    setActiveIndex(index);
  };

  const imageContainers = [
    tiger,
    tiger2,
    tiger3,
    tiger2,
    tiger3,
  ];

  return (
    <div className=' bg-black h-screen  '>
    <div className='  pt-40'>
    <span className="gallery-text  bg-black   ml-[570px] text-4xl text-white ">Best Photography</span>

    <div className="containerr w-50 space-x-10 bg-black bg-fixed mx-auto">
        {imageContainers.map((image, index) => (
          <div
            key={index}
            className={`image-containerr bg-fixed ${activeIndex === index ? 'active shadow' : ''}`}
            onMouseEnter={() => handleImageContainerHover(index)}
            onMouseLeave={() => handleImageContainerHover(null)}
          >
            <img className="image" src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </div>
     
        
      
     
    </div>
  );
};

export default ImageGallery;
