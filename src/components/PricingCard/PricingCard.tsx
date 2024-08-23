import styled from "styled-components";

export interface PricingCardProps {
  imageUrl: string;
  title: string;
  pricing: { detail: string; price: string }[];
}

const PricingCard = ({ imageUrl, title, pricing }: PricingCardProps) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="Realestate Photography" />
      <DetailsWrapper>
        <Title>{title}</Title>
        <DescriptionWrapper>
          {pricing.map((price, index) => (
            <Description key={index}>
              {price.detail} <Price>{price.price}</Price>
            </Description>
          ))}
        </DescriptionWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default PricingCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 10px 0px rgba(128, 128, 128, 0.5);
  font-family: Poppins;
`;

const Image = styled.img`
  width: 100%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Description = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: rgb(63, 63, 70, 1);
  line-height: 1.2rem;
`;

const DescriptionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
`;

const Price = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  margin-left: 5px;
`;
