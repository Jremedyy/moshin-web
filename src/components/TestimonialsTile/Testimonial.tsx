import styled from "styled-components";
import StarIcon from "../Icon/StarIcon";

export interface TestimonialProps {
  imageUrl: string;
  description: string;
  author: string;
}

const Testimonial = ({ imageUrl, description, author }: TestimonialProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt="Customer Testimonial" />
      </ImageWrapper>
      <div>
        <Description>{description}</Description>
        <Author>{`- ${author}`}</Author>
        <RatingWrapper>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </RatingWrapper>
      </div>
    </Wrapper>
  );
};

export default Testimonial;

const Wrapper = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 170px 0px rgba(227, 233, 237, 0.5);
  @media only screen and (min-width: 768px) {
    max-width: 545px;
    min-height: 300px;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 32px;
    gap: 28px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

const Image = styled.img`
  width: 123px;
  height: 123px;
  border-radius: 123px;
  object-fit: cover;
  background-color: blue;
`;

const Description = styled.div`
  display: flex;
  color: #35393b;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 12px;
  text-align: left;
`;

const Author = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  text-align: left;
  color: #4d5356;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 16px;
`;

const RatingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
`;
