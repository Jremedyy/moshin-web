import styled from "styled-components";

export interface TileProps {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  accentColor: string;
  direction?: "reverse" | "";
}

const Tile = ({
  title,
  subtitle,
  description,
  imgUrl,
  accentColor,
  direction,
}: TileProps) => {
  return (
    <Wrapper className={direction}>
      <ContentWrapper className={direction}>
        <DetailsWrapper className={direction}>
          <DetailsContent>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
          </DetailsContent>
        </DetailsWrapper>
        <ImagesWrapper className={direction}>
          <ImageContainer className={direction}>
            <AspectRatioPlaceholderImage />
            <Image src={imgUrl} alt={"professional photography"} />
          </ImageContainer>
          <AccentWrapper>
            <div className={"relative"}>
              <AspectRatioPlaceholderAccent />
              <AccentColor color={accentColor} />
            </div>
          </AccentWrapper>
        </ImagesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Tile;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: right;
    &.reverse {
      justify-content: left;
    }
  }
`;

const Title = styled.h2`
  color: #222426;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -1.2px;
`;

const Subtitle = styled.h3`
  color: #35393b;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.3px;
`;

const Description = styled.div`
  color: #35393b;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

interface AccentColorProps {
  color: string;
}

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (min-width: 768px) {
    justify-content: right;
    &.reverse {
      justify-content: left;
    }
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: left;
    &.reverse {
      justify-content: right;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 30px;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    gap: 50px;
    align-items: center;
    flex-direction: row;
    justify-content: right;
    &.reverse {
      flex-direction: row-reverse;
      justify-content: left;
    }
  }
  @media only screen and (min-width: 1024px) {
    gap: 100px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0px 30px;
  @media only screen and (min-width: 768px) {
    max-width: 570px;
    border-radius: 0px 57px 0px 93px;
    &.reverse {
      border-radius: 57px 0px 93px 0px;
    }
  }
`;

const AspectRatioPlaceholderImage = styled.div`
  content: "";
  display: block;
  padding-top: 66.63%; /* This will maintain the aspect ratio (222/332 * 100) */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    max-width: 462px;
  }
`;

const AspectRatioPlaceholderAccent = styled.div`
  content: "";
  display: block;
  padding-top: 68.5%;
`;

const AccentColor = styled.div<AccentColorProps>`
  width: 83%;
  height: 83%;
  flex-shrink: 0;
  border-radius: 103.069px;
  background: ${(props) => props.color};
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: calc(0.63 * 100%);
`;

const AccentWrapper = styled.div`
  max-width: 570px;
  width: 100%;
  position: absolute;
  /* z-index: 5; */
  .relative {
    position: relative;
    max-width: unset;
  }
`;
