import styled from "styled-components";
import { ContactForm, ContactFormProps } from "../ContactForm/ContactForm";
import { CloseButton, ControlWrapper, Wrapper } from "./styles";

export interface ContactFormOverlayProps extends ContactFormProps {
  handleCloseIconClick(): void;
}

export const ContactFormOverlay = (props: ContactFormOverlayProps) => {
  return (
    <Wrapper>
      <ContactFormWrapper>
        <ControlWrapper>
          <CloseButtonWrapper>
            <CloseButton onClick={props.handleCloseIconClick} />
          </CloseButtonWrapper>
        </ControlWrapper>
        <ContactForm {...props} />
      </ContactFormWrapper>
    </Wrapper>
  );
};

const ContactFormWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  @media only screen and (min-width: 768px) {
    height: 900px;
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
  height: 20px;
  width: 20px;
`;
