import NavbarLayout from "../layouts/NavbarLayout";
import { MainTile } from "../components/MainTile";

import styled from "styled-components";
import { TestimonialTile } from "../components/TestimonialsTile/TestimonialsTile";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import WhatWeDoGroup from "../components/WhatWeDo/WhatWeDoGroup";
import React from "react";

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
      <TileWrapper>
        <MainTile />
        <WhatWeDoGroup />
        <TestimonialTile />
        <GetInTouch />
      </TileWrapper>
    </NavbarLayout>
  );
}

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(227, 233, 237, 0.5);
`;
