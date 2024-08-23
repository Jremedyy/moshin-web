import GlobalStyle from "../styles/globalStyles";
import Head from "next/head";

import type { AppProps } from "next/app";
import React from "react";
import { OverlayProvider } from "@/context/OverlayContext";
import { Overlay } from "@/components/Overlay/Overlay";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Moshin Media"}</title>
      </Head>
      <GlobalStyle />
      <OverlayProvider>
        <Overlay />
        <Component {...pageProps} />
      </OverlayProvider>
    </>
  );
}
