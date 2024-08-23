import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;

  @media only screen and (min-width: 768px) {
    min-height: unset;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  position: absolute;
  width: fit-content;
  padding: 28px;
  flex-direction: column;
  gap: 15px;
  border-radius: 27px;
  border: 2px solid #fff;
  background: rgba(217, 217, 217, 0.01);
  backdrop-filter: blur(70px);
  -webkit-backdrop-filter: blur(70px);
  margin: 30px 15px;

  @media only screen and (min-width: 768px) {
    display: flex;
    width: fit-content;
    aspect-ratio: unset;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    padding: 32px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 64px 67px;
  }

  .display-wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 30px;
  }
`;

export const CtaTitle = styled.div`
  width: 285px;
  color: #fff;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    width: unset;
    min-width: 256px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -1.2px;
  }
  @media only screen and (min-width: 1024px) {
    flex-shrink: 0;
    width: 552px;
    font-size: 64px;
  }
`;

export const CtaSubTitle = styled.div`
  width: 285px;
  color: #f2f2f3;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: Poppins;
  @media only screen and (min-width: 768px) {
    width: unset;
    max-width: 375px;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -1.2px;
    font-size: 18px;
  }
  @media only screen and (min-width: 1024px) {
    height: 75px;
  }
  @media only screen and (min-width: 1240px) {
    max-width: 465px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 250px;
  height: 60px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 50px;
  border: 2px solid #9bc7c5;
  color: white;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.3px;
  margin: 0 auto;

  background-color: var(--primary-color);
  color: var(--nutral-black-white-white, #fff);
  transition: background-color 250ms;
  cursor: pointer;

  &:link,
  &:visited {
    background-color: var(--primary-color);
  }

  /* mouse over link */
  &:hover {
    background-color: var(--primary-color-600);
  }

  /* selected link */
  &:active {
    transition: none;
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 30px;
  }
  
  @media only screen and (min-width: 1024px) {
    width: 250px;
    height: 60px;
  }
`;

export const MainTileFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 102px;
  background-color: #388f94;
  gap: 20px;
  z-index: 4;
  justify-content: center;
  bottom: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  height: fit-content;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;

export const BackgroundImage = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  max-height: 1200px;
`;

export const BackgroundImageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - var(--navbarHeightMobile));
  height: 100%;
  background-image: url("https://images.ctfassets.net/vm35rz92ipmx/2NSWlAuQX3Srm0UNe5v48d/6ecedd53858e96b17383a0306b2873fe/f25c7e8c547c0882a1237ddb5d98f794.png");
  background-size: cover;
  background-position: center;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    min-height: calc(100vh - var(--navbarHeightDesktop));
  }
`;

export const ClientImg = styled.img`
  height: 50px;
  max-width: 20vw;
  width: 100%;
  object-fit: contain;
  @media only screen and (min-width: 768px) {
    height: 62px;
  }
`;
