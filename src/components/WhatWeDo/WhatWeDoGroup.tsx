import styled from "styled-components";
import Tile, { TileProps } from "./Tile";
import { SiteGrid } from "@/styles/globalStyles";

const WhatWeDoGroup = () => {
  const tiles: TileProps[] = [
    {
      title: "Photography",
      subtitle: "Prices Starting at: $150",
      description:
        "Our photo services provide stunning high-quality HDR photography, serving as the foundation for successful home marketing. With our expertise, we bring your listing to life and generate strong market interest. Our services are priced competitively with basic photo shoots starting at $150.",
      imgUrl:
        "https://images.moshinremedia.com/MoshinHomePageImages%2Ftile1.jpeg",
      accentColor: "#FED3AE",
    },
    {
      title: "Videography",
      subtitle: "Prices Starting at: $200",
      description:
        "What better way to showcase a home than a highlight reel that gives your home dimensionality and evokes an immersive experience for potential buyers, allowing them to envision themselves living in the space effortlessly. Video marketing captures the essence of a property, effectively capturing its unique features and creating a lasting impression that still images alone simply cannot replicate.",
      imgUrl:
        "https://images.moshinremedia.com/MoshinHomePageImages%2Ftile2.jpeg",
      accentColor: "#9BC7C5",
    },
    {
      title: "Drone",
      subtitle: " Prices Starting at: $75",
      description:
        "Elevate your real estate marketing with captivating drone media, giving your listings a distinct advantage in a sea of ordinary presentations. By incorporating drone footage, you can showcase properties from unique angles, providing a visually stunning and memorable experience for potential buyers. Stand out from the competition and capture attention with our exclusive drone services, highlighting the true potential of your listings like never before. Our competitive rates are hard to beat with drone packages starting at $75.",
      imgUrl:
        "https://images.moshinremedia.com/MoshinHomePageImages%2Ftile3.jpeg",
      accentColor: "#F4A4A6",
    },
    {
      title: "3D Tours",
      subtitle: "Prices Starting at: $150",
      description:
        "We bring properties to life with our state-of-the-art 3D Tour services. Our immersive 3D Tours offer a 360° virtual walkthrough experience that feels as real as being there.",
      imgUrl:
        "https://images.moshinremedia.com/MoshinHomePageImages%2Ftile4.jpeg",
      accentColor: "#FFE797",
    },
  ];
  return (
    <SiteGrid id="pricing">
      <Wrapper>
        {tiles.map(
          ({ title, subtitle, description, imgUrl, accentColor }, index) => {
            return (
              <Tile
                title={title}
                subtitle={subtitle}
                description={description}
                imgUrl={imgUrl}
                accentColor={accentColor}
                key={index}
                direction={index % 2 === 0 ? "reverse" : ""}
              />
            );
          }
        )}
      </Wrapper>
    </SiteGrid>
  );
};

export default WhatWeDoGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: right;
    grid-column: 1/9;
    &.reverse {
      justify-content: left;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1/13;
  }
`;
