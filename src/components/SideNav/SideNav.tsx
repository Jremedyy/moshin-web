import { SiteGrid } from "../../styles/globalStyles";
import styled from "styled-components";
import HamburgerMenu from "../Icon/HamburgerMenu";
import CloseIcon from "../Icon/CloseIcon";
import React, { useContext } from "react";

import { Logo } from "../Logo/Logo";
import { ContactFormOverlay } from "../ContactFormOverlay/ContactFormOverlay";
import { OverlayContext } from "@/context/OverlayContext";
import { Header } from "../GetInTouch/styles";

interface SideNavProps {
  handleCloseClick: () => void;
}
const SideNav = ({ handleCloseClick }: SideNavProps) => {
  const overlayContext = useContext(OverlayContext);

  function handleConnectClick() {
    handleCloseClick();

    const content = (
      <ContactFormOverlay
        handleCloseIconClick={() => overlayContext.hideOverlay()}
        handleContinueClick={() => overlayContext.hideOverlay()}
      />
    );

    overlayContext.showOverlay(content);
  }

  return (
    <SideNavGrid>
      <Wrapper>
        <ItemsWrapper>
          <NavItem href="/portfolio">{"Portfolio"}</NavItem>
          <NavItem href="/pricing">{"Pricing"}</NavItem>
          <NavItem href="/about">{"About"}</NavItem>
          <NavItem onClick={handleConnectClick}>{"Connect"}</NavItem>
        </ItemsWrapper>
      </Wrapper>
    </SideNavGrid>
  );
};
export default SideNav;
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  font-family: Poppins;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
  grid-column: 1/5;
  @media only screen and (min-width: 768px) {
    grid-column: 1/9;
  }
`;

const SideNavGrid = styled(SiteGrid)`
  display: unset;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
`;

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid var(--Brand-color-Primary-Metallic-Seaweed);
`;

const CloseIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ItemsWrapper = styled.div`
  padding: 0 20px;
`;

const NavItem = styled.a`
  padding-top: 17px;
  color: inherit;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--Brand-color-Primary-Metallic-Seaweed);
  box-sizing: border-box;
  display: list-item;
  list-style-type: none;
  font-family: Lato;
  cursor: pointer;
`;
