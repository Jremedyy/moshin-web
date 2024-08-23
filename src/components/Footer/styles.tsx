import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 30px;
  grid-column: 1/5;
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1/13;
  }
`;

export const PoliciesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  margin: 0 auto;
  border-top: 1px #bfc2c5;
`;

export const StyledSpan = styled.span`
  color: #656c72;

  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 97px;
  }
  @media only screen and (min-width: 1024px) {
    gap: 122px;
  }

  .title {
    color: var(--Nutral-Gray-900, #0e0f10);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -0.3px;
  }
  .subtitle {
    color: var(--Nutral-Gray-800, #222426);
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  .linksWrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .addressWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .iconWrapper {
    display: flex;
    align-items: center;
    gap: 22px;
  }
  .contactWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .contactItem {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 150px;
`;
