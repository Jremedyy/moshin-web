import NavbarLayout from "../layouts/NavbarLayout";

import React, { useContext, useState } from "react";
import { SiteGrid } from "@/styles/globalStyles";
import styled from "styled-components";
import PricingCard, {
  PricingCardProps,
} from "@/components/PricingCard/PricingCard";
import {
  PricingCardV2,
  PricingCardV2Props,
} from "@/components/PricingCardV2/PricingCardV2";
import { Overlay } from "@/components/Overlay/Overlay";
import { ContactFormOverlay } from "@/components/ContactFormOverlay/ContactFormOverlay";
import { OverlayContext, OverlayContextProps, OverlayProvider } from "@/context/OverlayContext";

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

const packages: Omit<PricingCardV2Props, "handleCtaClick">[] = [
  {
    title: "Basic",
    price: "$550",
    features: [
      "20-40 HDR Photos",
      "10-15 Drone Photos",
      "1-2 Minute Walkthrough Video",
    ],
  },
  {
    title: "Standard",
    price: "$700",
    features: [
      "20-40 HDR Photos",
      "10-15 Drone Photos + Drone Video",
      "50 Second - 2 Minute Cinematic Highlight Video",
    ],
  },
  {
    title: "Premium",
    price: "$1,000",
    features: [
      "35-50 HDR Photos",
      "15-20 Drone Photos + Drone Video",
      "1-3 Minute Cinematic Highlight Video",
      "30-60 Second Social Media Version Video",
      "Matterport or Zillow 3D Tour",
      "Floorplan",
      "Dedicated Webpage",
      "Virtual Staging",
    ],
  },
  {
    title: "Deluxe",
    price: "$1,250",
    features: [
      "50-70 HDR Photos",
      "15-20 Drone Photos + 4K Drone Video",
      "3-5 Minute 4K Cinematic Highlight Video",
      "30-60 Second Social Media Version Video",
      "Matterport or Zillow 3D Tour",
      "Floorplan",
      "Dedicated Webpage",
      "Virtual Staging",
    ],
  },
];

const services: PricingCardProps[] = [
  {
    title: "Photo",
    imageUrl:
      "https://images.moshinremedia.com/MoshinHomePageImages%2Ftile1.jpeg",
    pricing: [
      { detail: "Amenity Photo (per amenity) ", price: "$5" },
      { detail: "Local Attraction", price: "$50" },
      { detail: "Basic Package (Up to 15 photos)", price: "$150" },
      { detail: "Standard Package (25-40 photos)", price: "$250" },
    ],
  },
  {
    title: "Video",
    imageUrl:
      "https://images.moshinremedia.com/ground%20photography%2Fimg-1308-1_orig.jpg",
    pricing: [
      { detail: "Amenity Video", price: "$50" },
      { detail: "Local Attractions Video", price: "$75" },
      { detail: "Video Slideshow", price: "$75" },
      { detail: "Basic Package (1 - 2 minute walk thorugh)", price: "$200" },
      {
        detail: "Standard Package (1 - 2 minute cinematic highlight)",
        price: "$300",
      },
      { detail: "Video Only", price: "$350" },
    ],
  },
  {
    title: "Drone",
    imageUrl:
      "https://images.moshinremedia.com/ground%20photography%2Fdsc01255_orig.jpg",
    pricing: [
      { detail: "Drove Video (2-4 photos)", price: "$50" },
      { detail: "Basic Package (1 photo)", price: "$50" },
      { detail: "Standard Package (2-4 photos)", price: "$75" },
      { detail: "Premium Package (8-15 photos)", price: "$100" },
      { detail: "Drone Only", price: "$200" },
    ],
  },
  {
    title: "3D Tours",
    imageUrl:
      "https://images.moshinremedia.com/ground%20photography%2Fdsc01255_orig.jpg",
    pricing: [{ detail: "3D Matterport Tour", price: "$150" }],
  },
  {
    title: "Twilight",
    imageUrl:
      "https://images.moshinremedia.com/ground%20photography%2F138a0877_orig.jpg",
    pricing: [
      { detail: "Twilight Drove Video", price: "$100" },
      { detail: "Twilight Drove Photo", price: "$200" },
      { detail: "Twilight Video", price: "$250" },
      { detail: "Twilight Photo", price: "$250" },
    ],
  },

  {
    title: "Other",
    imageUrl:
      "https://images.moshinremedia.com/ground%20photography%2Fimg-1437-2_orig.jpg",
    pricing: [
      { detail: "Virtual Staging (per photo)", price: "$25" },
      { detail: "2D Floor Plan", price: "$50" },
      { detail: "Virtual Twilight (3 photos)", price: "$50" },
      { detail: "Headshots (per agent)", price: "$100" },
      { detail: "Website", price: "$100" },
    ],
  },
];

export default function Pricing() {
  const overlayContext = useContext(OverlayContext);

  function handleCtaClick() {
    const content = (
      <ContactFormOverlay
        handleCloseIconClick={() => overlayContext.hideOverlay()}
        handleContinueClick={() => overlayContext.hideOverlay()} />
    );

    overlayContext.showOverlay(content);
  }

  return (
    <NavbarLayout>
      <Wrapper>
        <SectionWrapper>
          <SectionHeader>{"Packages"}</SectionHeader>
          <PricingCardWrapper $columns={packages.length}>
            {packages.map((p, index) => (
              <PricingCardV2
                key={`pricing-card-${index}`}
                title={p.title}
                price={p.price}
                features={p.features}
                index={index}
                handleCtaClick={handleCtaClick}
              />
            ))}
          </PricingCardWrapper>
        </SectionWrapper>
        <SectionWrapper style={{ gap: "16px" }}>
          <SectionHeader>{"Services"}</SectionHeader>
          <ServicesCardsWrapper>
            {services.map((service, index) => (
              <PricingCard
                key={index}
                title={service.title}
                imageUrl={service.imageUrl}
                pricing={service.pricing}
              />
            ))}
          </ServicesCardsWrapper>
        </SectionWrapper>
      </Wrapper>
    </NavbarLayout>

  );
}

const PricingCardWrapper = styled.div<{ $columns: number }>`
  display: grid;
  width: 100%;
  row-gap: 16px;
  margin: 0 auto;
  
  @media only screen and (min-width: 1200px) {
    column-gap: 8px;
    grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr);`};
  }
`;

const SectionHeader = styled.h2`
  padding: 16px 0;
  font-size: 36px;
`;

const SectionWrapper = styled(SiteGrid)`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1200px;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    padding: 0 80px;
    margin-bottom: 20px;
    gap: 32px;
  }
`;

const ServicesCardsWrapper = styled.div`
  display: grid;
  row-gap: 16px;
  column-gap: 16px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    gap: unset;
  }
`;
