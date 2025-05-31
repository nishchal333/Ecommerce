// src/components/Slider.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Style/Button";
// Styled components
export const SliderWrapper = styled.div`
  width: 100%;
  display:flex;
  align-item: center;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 33rem;
`;

export const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const Slide = styled.div`
  min-width: 100%;
`;

export const Image = styled.img`
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;
  height: 33rem; 
  object-fit: contain;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
  }

  ${({ left }) => left && `left: 10px;`}
  ${({ right }) => right && `right: 10px;`}
`;

// React component
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=",
    "https://images.samsung.com/is/image/samsung/africa-en-fhd-t5300-ua40t5300auxly-rperspectiveblack-243705815?$684_547_PNG$",
    "https://m.media-amazon.com/images/I/31Na4uyIEyL._SR290,290_.jpg",
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://m.media-amazon.com/images/I/51pycg0MGxL.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnlsce46Ivi_wNagjC0Fn4kEtmol0BiLYDQ&s",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <SliderWrapper>
      <SliderContainer currentIndex={currentIndex}>
        {images.map((src, index) => (
          <Slide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderContainer>
      {/* // &#9664;  // Left arrow (◀) */}
      <NavigationButton left onClick={prevSlide}>
        &#9664;
      </NavigationButton>

      {/* // Right arrow (▶) */}
      <NavigationButton right onClick={nextSlide}>
        &#9654;
      </NavigationButton>
    </SliderWrapper>
  );
};

export default Slider;
