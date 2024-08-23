import styled from "styled-components";
import CloseIcon from "../Icon/CloseIcon";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 16px;
  margin: auto;
`;

export const ControlWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 9999;
  right: 20px;
  top: 0px;
  flex-direction: row-reverse;
  margin: 16px 0;
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;

  & > path {
    fill: black;
  }
`;
