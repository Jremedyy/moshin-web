import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ showDialog?: boolean }>`
  :root {
    --primary-color: #1D7E86;
    --primary-color-600: #105861;
    --primary-variant-color: #E8D808;
    --secondary-color: #E60012;
    --secondary-variant-color: #AC000E;
    --primary-font-color: white;
    --secondary-font-color: #888888;
    --main-min-height: calc(100vh - 61px);
    --main-min-height-fallback: calc(100vh - 61px);
    --nutral-black-white-white: #FFFFFF;
    --Nutral-Gray-900: #0E0F10;
    --Nutral-Gray-50: #F2F2F3;
    --Nutral-Gray-200: #BFC2C5;
    --navbarHeightDesktop: 90px;
    --navbarHeightMobile: 69px;
    --moshin-accent-color: #388f94
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 18px;
    scroll-padding-top: 61px;
  }

  html, body {
    width: 100%;
    overflow: ${(props) => props.showDialog && "hidden"};
    font-family: Poppins;
  }

  body {
    margin: 0;
    padding: 0;
    &.modal-open {
      overflow: hidden !important;
      @media only screen and (min-width: 1024px) {
      overflow: unset;
      }
    }
  }

  a {
    text-decoration: none;
  }

  a {
    color: #3773e1;
  }

`;

export default GlobalStyle;

export const SiteGrid = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
  grid-auto-flow: column; /* Ensure items stack in a single column */

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    grid-template-columns: repeat(12, 1fr);
  }
`;
