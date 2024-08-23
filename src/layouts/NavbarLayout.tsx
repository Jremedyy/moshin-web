import styled from "styled-components";
import { ReactNode } from "react";
import { Header } from "@/components";
import { Footer } from "@/components/Footer";

interface NavbarLayoutProps {
  showHeaderAd?: boolean;
  children: ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps) => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default NavbarLayout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: var(--main-min-height-fallback);
  min-height: var(--main-min-height);
  border: none;
  flex-shrink: 0;
  background: var(--nutral-black-white-white, #fff);
  @media only screen and (min-width: 1024px) {
    /* max-width: 1920px; */
  }
`;
