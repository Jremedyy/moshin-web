import { Image, ContentWrapper, Header, Subtitle, Title, Wrapper, Content, ContactFormWrapper } from "./styles";
import { ContactForm } from "../ContactForm/ContactForm";

const GetInTouch = () => {
  return (
    <Wrapper id={"get-in-touch"}>
      <ContentWrapper>
        <Content>
          <Header>
            <Title>{"Get in touch with us today!"}</Title>
            <Subtitle>
              {
                "Elevate your listings with our expert real estate photography and videography services."
              }
            </Subtitle>
          </Header>
          <ContactFormWrapper>
            <ContactForm />
          </ContactFormWrapper>
          <Image />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default GetInTouch;