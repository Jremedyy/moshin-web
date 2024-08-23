import styled from "styled-components";
import {
  BackgroundImage,
  BackgroundImageWrapper,
  Button,
  CTAWrapper,
  ClientImg,
  CtaSubTitle,
  CtaTitle,
  IconWrapper,
  MainTileFooter,
  Wrapper,
} from "./styles";
import KWIcon from "../Icon/KWIcon";
import RemaxIcon from "../Icon/RemaxIcon";
import CBIcon from "../Icon/CBIcon";
import CalendarIcon from "../Icon/Calendar";

import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import Marquee from "../Marquee/Marquee";

const clients: string[] = [
  "https://images.moshinremedia.com/clients%2Fexcelsior.png",
  "https://images.moshinremedia.com/clients%2Fexit_logo.webp",
  "https://images.moshinremedia.com/clients%2Fgulfcoastlogo-1920w.png",
  "https://images.moshinremedia.com/clients%2Fh200_original_4f560ace-9ec4-4fa7-be03-8a840056f888-png.webp",
  "https://images.moshinremedia.com/clients%2Fheader-logo-verona-walk-realty.png",
  "https://images.moshinremedia.com/clients%2Fjohnrwood-logo-dark.png",
  "https://images.moshinremedia.com/clients%2Fmarzucco.png",
  "https://images.moshinremedia.com/clients%2Fpremiere.png",
];
const logos: string[] = [
  "https://images.moshinremedia.com/clients%2Fexcelsior.png",
  "https://images.moshinremedia.com/clients%2Fexit_logo.webp",
  "https://images.moshinremedia.com/clients%2Fgulfcoastlogo-1920w.png",
  "https://images.moshinremedia.com/clients%2Fh200_original_4f560ace-9ec4-4fa7-be03-8a840056f888-png.webp",
  "https://images.moshinremedia.com/clients%2Fheader-logo-verona-walk-realty.png",
  "https://images.moshinremedia.com/clients%2Fjohnrwood-logo-dark.png",
  "https://images.moshinremedia.com/clients%2Fmarzucco.png",
  "https://images.moshinremedia.com/clients%2Fpremiere.png",
  "https://images.moshinremedia.com/clients%2Fcbrlogo.svg",
  "https://images.moshinremedia.com/clients%2FREMAX-logo.svg",
  "https://images.moshinremedia.com/clients%2Fkwlogo.png",
];

const MainTile = () => {
  const scrollToTarget = (target: string) => {
    var targetElement = document.getElementById(target);
    targetElement!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <BackgroundImageWrapper />

      <CTAWrapper>
        <CtaTitle>
          {"Real Estate "}
          <br />
          {"Media Redefined"}
        </CtaTitle>
        <div className="display-wrapper">
          <CtaSubTitle>
            {
              "Photography and videography services in Naples, Ft. Myers & Marco Island"
            }
          </CtaSubTitle>
          <Button onClick={() => scrollToTarget("get-in-touch")}>
            {"Book a Quote"}
            <CalendarIcon />
          </Button>
        </div>
      </CTAWrapper>
      <MainTileFooter>
        <Marquee images={logos} />
      </MainTileFooter>
    </Wrapper>
  );
};

export default MainTile;
const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;
  user-select: none;

  .swiper-pagination-horizontal {
    display: none;
  }

  .swiper-pagination-bullet {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
  .swiper {
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 768px) {
      padding: 0px 75px;
      &:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 75px;
        right: 0;
        bottom: 0;
        opacity: 0.9;
        background-color: #388f94;
        backdrop-filter: blur(15px);
        z-index: 10;
        @media only screen and (min-width: 768px) {
        }
      }
      &:before {
        content: "";
        position: absolute;
        height: 100%;
        width: 75px;
        left: 0;
        bottom: 0;
        opacity: 0.9;
        background: linear-gradient(to left, #388f94 0%, #388f94 100%);
        backdrop-filter: blur(15px);
        z-index: 10;

        @media only screen and (min-width: 768px) {
        }
      }
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    width: 60%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }
`;
