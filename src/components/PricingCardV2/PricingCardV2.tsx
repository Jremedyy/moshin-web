import styled from "styled-components";
import CheckmarkSvg from "../Icon/Checkmark";

export interface PricingCardV2Props {
  title: string;
  price: string;
  features: string[];
  handleCtaClick(): void;
  index?: number;
}

export const PricingCardV2 = (props: PricingCardV2Props) => {
  const ctaButtonText = "Book Now";

  return (
    <Wrapper className={props.index === 1 ? "most-popular" : ""}>
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
      <CTAButton onClick={props.handleCtaClick}>{ctaButtonText}</CTAButton>
      <FeaturesTitle>{`Includes`}</FeaturesTitle>
      <FeaturedListWrapper>
        {props.features.map((f, index) => (
          <ItemWrapper key={index}>
            <IconWrapper>
              <CheckmarkSvg />
            </IconWrapper>
            <Item key={`feature-li-${index}`}>{f}</Item>
          </ItemWrapper>
        ))}
      </FeaturedListWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 10px 0px rgba(128, 128, 128, 0.5);
  border-radius: 8px;
  padding: 16px;

  &.most-popular {
    position: relative;
    border-radius: 0 0 8px 8px;
    margin-top: 32px;
    @media only screen and (min-width: 1200px) {
      margin-top: unset;
    }
    &::before {
      content: "Most Popular";
      text-align: center;
      padding: 5px 0;
      position: absolute;
      left: 0;
      top: -35px;
      width: 100%;
      color: white;
      background-color: #1d4986cc;
      box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.5);
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    text-align: unset;
  }
`;

export const Price = styled.div`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    text-align: unset;
  }
`;

export const Description = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

export const CTAButton = styled.button`
  background-color: #388f94;
  color: var(--nutral-black-white-white, #fff);
  cursor: pointer;
  border-radius: 32px;
  border: none;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  padding: 12px 16px;
`;

export const FeaturesTitle = styled.div`
  margin-top: 16px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 900;
`;

export const Item = styled.div`
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  max-width: 300px;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const FeaturedListWrapper = styled.div`
  display: grid;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
  }
  @media only screen and (min-width: 1200px) {
    display: unset;
  }
`;
