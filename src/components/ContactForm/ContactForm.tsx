import { LoadingSpinner, StyledIframe, Wrapper } from "./styles";

import { useState } from "react";

export interface ContactFormProps {
  handleContinueClick?(): void;
}

export const ContactForm = (props: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Wrapper>
      {isLoading && <LoadingSpinner />}
      <StyledIframe
        src="https://moshin-real-estate-media.aryeo.com/order"
        title="description"
        onLoad={handleLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </Wrapper>
  );
};
