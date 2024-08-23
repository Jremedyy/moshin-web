import styled from "styled-components";
import FacebookIcon from "../Icon/Facebook";
import TwitterIcon from "../Icon/Twitter";
import YoutubeIcon from "../Icon/Youtube";
import PhoneIcon from "../Icon/PhoneIcone";
import MailIcon from "../Icon/MailIcon";
import { SiteGrid } from "@/styles/globalStyles";
import {
  Wrapper,
  InfoWrapper,
  LogoWrapper,
  PoliciesWrapper,
  StyledSpan,
} from "./styles";
import { Logo } from "../Logo/Logo";
import Instagram from "../Icon/InstagramIcon";

const Footer = () => {
  return (
    <SiteGrid>
      <Wrapper>
        <InfoWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div className="linksWrapper">
            <div className="title">Quick Links</div>
            <a className="subtitle" href="/portfolio">
              Portfolio
            </a>
            <a className="subtitle" href="/pricing">
              Pricing
            </a>
            <a className="subtitle" href="/about">
              About
            </a>
          </div>
          <div className="addressWrapper">
            <div className="title">Address</div>
            <div className="subtitle">123 Main STree, Anytown USA</div>
            <div className="iconWrapper">
              <AtagWrapper
                href="https://www.facebook.com/moshinmedia"
                target="_blank"
              >
                <FacebookIcon />
              </AtagWrapper>
              <AtagWrapper
                href="https://www.instagram.com/moshinrealestatemedia/"
                target="_blank"
              >
                <Instagram />
              </AtagWrapper>
            </div>
          </div>
          <div className="contactWrapper">
            <div className="contactItem">
              <PhoneIcon />
              <div className="subtitle">{"(239) 944-8302"}</div>
            </div>
            <div className="contactItem">
              <MailIcon />
              <div className="subtitle">{"info@moshinremedia.com"}</div>
            </div>
          </div>
        </InfoWrapper>
        <PoliciesWrapper>
          <StyledSpan>{"© Moshin Media. All rights reserved."}</StyledSpan>
          <StyledSpan>{"Terms of Use Privacy Policy"}</StyledSpan>
        </PoliciesWrapper>
      </Wrapper>
    </SiteGrid>
  );
};

export default Footer;

const AtagWrapper = styled.a`
  display: flex;
  align-items: center;
`;
