import React from "react";
import styled from "styled-components";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/Github.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";

const FooterContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.cardLight};
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%;
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 760px) {
    gap: 10px;
  }
`;

const LinkIcon = styled.a`
  &:hover {
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
`;

const Logo = styled.img`
  object-fit: cover;
  height: 3rem;
  width: 3rem;
  margin: 0 1rem;
  @media (max-width: 760px) {
    margin: 0;
    height: 2rem;
    width: 2rem;
  }
`;

const CopyRight = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: medium;

  @media (max-width:760px) {
    font-size: small;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LinkContainer>
        <LinkIcon
          href="https://www.linkedin.com/in/kshitiz-magar-7830a22a7/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={linkedin} alt="LinkedIn" />
        </LinkIcon>
        <LinkIcon
          href="https://github.com/KshitizRajan7"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={github} alt="Github" />
        </LinkIcon>
        <LinkIcon
          href="https://www.facebook.com/profile.php?id=61550560747070"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={facebook} alt="Facebook" />
        </LinkIcon>
        <LinkIcon
          href="https://www.instagram.com/kshitizrajanrides/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={instagram} alt="Youtube" />
        </LinkIcon>
        <LinkIcon
          href="https://www.youtube.com/channel/UCi42rXzU7zNWJxzmlKsPeng"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={youtube} alt="Tiktok" />
        </LinkIcon>
      </LinkContainer>
      <CopyRight>
        Copyright &#169; 2024 Kshitiz Rajan. All right recieved.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
