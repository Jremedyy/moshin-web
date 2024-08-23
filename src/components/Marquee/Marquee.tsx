import React from "react";
import styled, { keyframes } from "styled-components";

interface ScrollProps {
  $numSlides: number;
}

const animationSpeed = "40s";

const scroll = (props: ScrollProps) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-25vw * ${props.$numSlides}));
  }
`;
const Slider = styled.div<ScrollProps>`
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1440px;
  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(56, 143, 148, 0.9) 0%,
      rgba(56, 143, 148, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: ${(props: ScrollProps) => scroll(props)} ${animationSpeed} linear
      infinite;
    display: flex;
    width: calc(25vw * ${(props: ScrollProps) => props.$numSlides + 3});
  }

  .slide {
    height: 100px;
    width: 100%;
    padding: 12px;
  }
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Marquee = ({ images }: { images: string[] }) => {
  //dupes create continuity in the marquee
  const imagesWithDupes = [...images, images[0], images[1], images[2]];
  return (
    <Slider $numSlides={images.length}>
      <div className="slide-track">
        {imagesWithDupes.map((imageUrl, index) => (
          <Slide className="slide" key={index}>
            <img src={imageUrl} alt="Client" />
          </Slide>
        ))}
      </div>
    </Slider>
  );
};

export default Marquee;
