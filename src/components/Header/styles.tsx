import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color: white;
  max-width: 1320px;
  width: 100%;
  padding: 20px;
  grid-column: 1/5;

  .menu-wrapper {
    display: none;
  }
  .hamburger {
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
  @media only screen and (min-width: 1024px) {
    height: 90px;
    grid-column: 1/13;
    .menu-wrapper {
      display: flex;
      gap: 50px;
    }
    .hamburger {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;

  @media only screen and (min-width: 1024px) {
    width: 180px;
  }
`;

export const PageNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--Nutral-Gray-800, #222426);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  width: 270px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  .page {
    color: var(--Nutral-Gray-800, #222426);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ConnectButton = styled.button`
  display: flex;
  width: 140px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 2px solid var(--Brand-color-Shade-500, #1d7e86);
  color: var(--Brand-color-Primary-Metallic-Seaweed, #1d7e86);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.3px;
  cursor: pointer;
`;
