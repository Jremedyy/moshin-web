import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #388f94;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1025%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(56%2c 143%2c 148%2c 1)'%3e%3c/rect%3e%3cpath d='M999.05-162.11C839.59-155.9 768.4 66.62 418.62 103.47 68.83 140.32 30.9 595.01-161.82 632.67' stroke='rgba(255%2c 255%2c 255%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1015.32-161.18C809.56-23.26 920.11 712.65 559.77 718.71 199.43 724.77-100.59 307.54-351.33 297.51' stroke='rgba(255%2c 255%2c 255%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1255.49-203.24C1092.02-178.94 1006.47 207.1 739.12 209.51 471.78 211.92 480.94 74.51 222.76 74.51-35.43 74.51-160.18 208.4-293.61 209.51' stroke='rgba(255%2c 255%2c 255%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1113.92-76.09C945.17 16.63 1087.41 536.11 718.7 584.95 349.99 633.79 134.59 820-71.74 822.55' stroke='rgba(255%2c 255%2c 255%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1636.14-35.34C1388.29 108.3 1418.81 911.75 1064.37 957.66 709.92 1003.57 778.48 822.66 492.59 822.66 206.71 822.66 67.69 956.75-79.18 957.66' stroke='rgba(255%2c 255%2c 255%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1025'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  overflow: hidden;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: block;
  z-index: 1;

  @media only screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1440px;
  }
`;

export const Content = styled.div`
  display: block;
  z-index: 1;

  @media only screen and (min-width: 1280px) {
    position: relative;
    width: 50%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 20px 0 20px;
`;

export const Title = styled.div`
  color: var(--nutral-black-white-white, #fff);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
  text-shadow: 1px 1px 4px #00000015;
`;

export const Subtitle = styled.div`
  margin-top: 20px;
  color: var(--Nutral-Gray-50, #f2f2f3);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 136%;
  text-shadow: 1px 1px 4px #00000015;
`;

export const ContactFormWrapper = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  height: 940px;

  @media only screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const Image = styled.div`
  width: 100%;
  margin-top: 40px;
  aspect-ratio: 16/9;
  border-radius: 132px 0px 0px 0px;
  background-image: url("https://images.moshinremedia.com/MoshinHomePageImages%2Fbottom-tile.jpg");
  background-size: cover;

  @media only screen and (min-width: 1280px) {
    position: absolute;
    margin-top: unset;
    bottom: 0px;
    left: 100%;
    width: 50vw;
    height: 90%;
  }
`;
