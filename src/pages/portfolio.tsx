import NavbarLayout from "../layouts/NavbarLayout";
import styled from "styled-components";
import React from "react";
import { SiteGrid } from "@/styles/globalStyles";
import DecorativeBreak from "@/components/DecorativeBreak/DecorativeBreak";

export async function getStaticProps() {
  const seoDescription = "Moshin Realestate Media";
  //TODO
  const seoImage = "";

  return {
    props: {
      key: "/",

      seoData: {
        // canonicalUrl: `${process.env.NEXT_PUBLIC_BASE_URL!}`,
        metaTags: [
          {
            name: "description",
            content: seoDescription,
          },
          {
            property: "og:image",
            content: seoImage,
          },
          {
            property: "og:site_name",
            content: "Moshin Realestate Media",
          },
          {
            property: "og:title",
            content: "Moshin Realestate Media",
          },
          {
            property: "og:description",
            content: seoDescription,
          },
          {
            property: "og:url",
            content: `https://Moshinremedia.com`,
          },
          {
            property: "twitter:card",
            content: "summary_large_image",
          },
          {
            property: "twitter:image",
            content: seoImage,
          },
        ],
        structuredData: [
          {
            "@context": "http://schema.org/",
            "@type": "WebSite",
            name: "Moshin Media",
            url: `https://Moshinremedia.com`,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Moshin Realestate Media",
            url: `https://Moshinremedia.com`,
            sameAs: ["https://www.linkedin.com/in/john-plucenik-22205880/"],
          },
        ],
        title: "Moshin Realestate Media",
      },
    },
  };
}

export default function Portfolio() {
  const groundPhotoImageUrls = [
    "https://images.moshinremedia.com/ground%20photography%2F10_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2F138a0877_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fbest-photo_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc01255_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc01465_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc01951_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc04910-1_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc05015_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fdsc05963-1_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fimg-1137-1_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fimg-1308-1_orig.jpg",
    "https://images.moshinremedia.com/ground%20photography%2Fimg-1437-2_orig.jpg",
  ];

  const aerialPhotoImageUrls = [
    "https://images.moshinremedia.com/aerial%20photography%2F443-cropped_orig.jpg",
    "https://images.moshinremedia.com/aerial%20photography%2F495_orig.jpg",
    "https://images.moshinremedia.com/aerial%20photography%2F4_orig.jpg",
    "https://images.moshinremedia.com/aerial%20photography%2F5_orig.jpg",
    "https://images.moshinremedia.com/aerial%20photography%2Fdji-0095_orig.jpg",
    "https://images.moshinremedia.com/aerial%20photography%2Fdji-0128_orig.jpg",
  ];

  const groundVideoUrls = [
    "https://images.moshinremedia.com/videos%2Fground-video-1.mp4",
    "https://images.moshinremedia.com/videos%2Fground-video-2.mp4",
    "https://images.moshinremedia.com/videos%2Fground-video-3.mp4",
  ];

  const droneVideoUrls = [
    "https://images.moshinremedia.com/videos%2Fdrone-video-1.mp4",
    "https://images.moshinremedia.com/videos%2Fdrone-video-2.mp4",
  ];

  return (
    <NavbarLayout>
      <SiteGrid>
        <ContentWrapper>
          <H2>
            {"Real Estate Video"} <DecorativeBreak />
          </H2>
          <HeroContentWrapper>
            <HeroDescriptionWrapper>
              <Description>
                {
                  "Featured in Coldwell Banker's View Magazine,​ my work has helped sell hundreds of properties on the island of Oahu."
                }
              </Description>

              <Quote>
                {`"John was a valuable and reliable member of our team and his  production expertise helped our clients generate millions in Hawaii real estate sales."`}
              </Quote>

              <SubQuote>
                {
                  "- Andy Landgraf, Owner Hawaii's #1 Real Estate Production Company 360 Productions"
                }
              </SubQuote>
            </HeroDescriptionWrapper>
            <HeroVideoWrapper>
              <Video
                controls
                src="https://images.moshinremedia.com/videos%2Fhero-video.mp4"
              />
              <div className="description">
                {"The home above sold for $4.7M"}
              </div>
            </HeroVideoWrapper>
          </HeroContentWrapper>
        </ContentWrapper>
      </SiteGrid>
      <ColoredWrapper>
        <SiteGrid>
          <ContentWrapper>
            <H2>
              {"Ground Video"}
              <DecorativeBreak />
            </H2>

            <GroundVideoWrapper>
              {groundVideoUrls.map((url, index) => {
                return <Video controls src={url} key={index} />;
              })}
            </GroundVideoWrapper>

            <H2>
              {"Drone Video"}
              <DecorativeBreak />
            </H2>

            <DroneVideoWrapper>
              {droneVideoUrls.map((url, index) => {
                return <Video controls src={url} key={index} />;
              })}
            </DroneVideoWrapper>
          </ContentWrapper>
        </SiteGrid>
      </ColoredWrapper>

      <SiteGrid>
        <ContentWrapper>
          <H2>
            {"Ground Photography"} <DecorativeBreak />
          </H2>

          <PhotoGrid>
            {groundPhotoImageUrls.map((imgUrl, index) => {
              return (
                <img
                  className="image"
                  src={imgUrl}
                  key={index}
                  alt="Real Estate Photography"
                />
              );
            })}
          </PhotoGrid>
        </ContentWrapper>
      </SiteGrid>
      <ColoredWrapper>
        <SiteGrid>
          <ContentWrapper>
            <H2>
              {"Aerial Photography"} <DecorativeBreak />
            </H2>
            <PhotoGrid>
              {aerialPhotoImageUrls.map((imgUrl, index) => {
                return (
                  <img
                    className="image"
                    src={imgUrl}
                    key={index}
                    alt="Real Estate Photography"
                  />
                );
              })}
            </PhotoGrid>
          </ContentWrapper>
        </SiteGrid>
      </ColoredWrapper>
    </NavbarLayout>
  );
}

const H1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: black;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
  padding: 20px;
  gap: 50px;
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1/13;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 50px;
  }
`;

const HeroVideoWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  flex-direction: column;
  padding-top: 100px;

  @media only screen and (min-width: 1024px) {
    gap: 10px;
    padding: unset;
    justify-content: center;
  }

  .description {
    display: flex;
    width: 100%;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
`;

const HeroDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  gap: 40px;
`;

const Description = styled.div`
  font-size: 20px;
`;

const Quote = styled.div`
  font-size: 22px;
  font-style: italic;
`;

const SubQuote = styled.div`
  font-size: 20px;
`;

const GroundVideoWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  gap: 50px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
  }
`;

const H2 = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 33px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DroneVideoWrapper = styled(GroundVideoWrapper)`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 1fr;
  gap: 10px;
  .image {
    width: 100%;
  }
`;

const ColoredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #388f942e;
`;
