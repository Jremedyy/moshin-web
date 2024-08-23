import NavbarLayout from "../layouts/NavbarLayout";

import React from "react";
import { SiteGrid } from "@/styles/globalStyles";
import styled from "styled-components";

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

export default function Home() {
  return (
    <NavbarLayout>
      <SiteGrid>
        <Wrapper>
          <HeroImageWrapper>
            <Image
              src="https://images.moshinremedia.com/MoshinHomePageImages%2Fpfp.jpeg"
              alt="Founder and Photographer Headshot"
            />
          </HeroImageWrapper>
          <Description>
            <span>
              {
                " Moshin Real Estate Media owner John Plucenik recognized a need for a media service that valued the customer experience just as much as delivering quality photos and videos. He created Moshin Real Estate Media with the goal of providing magazine-quality imagery paired with customer support that tends to the client's specific needs. When it comes to marketing a property, his specialty is in finding and highlighting the features that will help make the difference to potential buyers. Whether it be photo, video, drone, 3D Tours, floorplans, portraiture & more, Moshin will craft a marketing solution to meet your demands. Now let's put your media plans in Moshin."
              }
            </span>

            <Name>{"John Plucenik"}</Name>
            <Owner>{"Owner, Moshin Real Estate Media"}</Owner>
          </Description>
        </Wrapper>
      </SiteGrid>
    </NavbarLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
  padding: 0 20px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1/13;
    flex-direction: row;
  }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
  padding: 20px 0px;
  max-width: 450px;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 800px;
  aspect-ratio: 1;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 620px;
  color: #35393b;
  font-family: Lato;
  font-size: 20px;
  color: rgb(158, 158, 158);
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  @media only screen and (min-width: 1024px) {
    padding: 20px;
  }
`;

const Name = styled.div`
  display: flex;
  width: 100%;
  font-weight: 700;
  font-style: normal;
  color: rgb(158, 158, 158);
  letter-spacing: 0;
  font-size: 31px;
  text-align: left;
  line-height: 36px;
`;

const Owner = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  letter-spacing: 0;
  font-size: 22px;
  line-height: 34px;
  font-weight: 400;
  color: rgb(158, 158, 158);
`;
