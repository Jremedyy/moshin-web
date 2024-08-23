import {
  ConnectButton,
  ContentWrapper,
  LogoWrapper,
  PageNameWrapper,
  Wrapper,
} from "./styles";
import HamburgerMenu from "../Icon/HamburgerMenu";
import { SiteGrid } from "../../styles/globalStyles";
import React, { useContext, useState } from "react";
import SideNav from "../SideNav/SideNav";
import { Logo } from "../Logo/Logo";
import { OverlayContext } from "@/context/OverlayContext";
import { ContactFormOverlay } from "../ContactFormOverlay/ContactFormOverlay";
import CloseIcon from "../Icon/CloseIcon";
import styled from "styled-components";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleModal = (isOpen: boolean) => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
    setIsSideNavOpen(isOpen);
  };

  const overlayContext = useContext(OverlayContext);

  function handleConnectClick() {
    const content = (
      <ContactFormOverlay
        handleCloseIconClick={() => overlayContext.hideOverlay()}
        handleContinueClick={() => overlayContext.hideOverlay()}
      />
    );

    overlayContext.showOverlay(content);
  }

  return (
    <SiteGrid>
      <Wrapper>
        <ContentWrapper>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>
          <div className="menu-wrapper">
            <PageNameWrapper>
              <a className="page" href="/portfolio">
                {"Portfolio"}
              </a>
              <a className="page" href="/pricing">
                {"Pricing"}
              </a>
              <a className="page" href="/about">
                {"About"}
              </a>
            </PageNameWrapper>
            <ConnectButton onClick={handleConnectClick}>
              {"Connect"}
            </ConnectButton>
          </div>
          <div
            onClick={() => toggleModal(!isSideNavOpen)}
            className="hamburger"
          >
            {isSideNavOpen ? (
              <CloseIconWrapper>
                <CloseIcon />
              </CloseIconWrapper>
            ) : (
              <HamburgerMenuWrapper>
                <HamburgerMenu />
              </HamburgerMenuWrapper>
            )}
          </div>
        </ContentWrapper>
        {isSideNavOpen && (
          <SideNav handleCloseClick={() => toggleModal(!isSideNavOpen)} />
        )}
      </Wrapper>
    </SiteGrid>
  );
};

export default Header;

const HamburgerMenuWrapper = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
`;

const CloseIconWrapper = styled(HamburgerMenuWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
  overflow: hidden;
`;
