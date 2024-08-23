import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const StyledIframe = styled.iframe`
  display: flex;
  border-radius: 27px;
  height: 100%;
  width: 100%;
  border-style: none;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  width: 100%;
  border-radius: 27px;
  background-color: #f0f0f0;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top: 5px solid var(--moshin-accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
