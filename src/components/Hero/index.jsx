import React from "react";
import styled, {keyframes} from "styled-components";
import { intro } from "../../data/informations";
import Typewriter from "typewriter-effect";
import HeroImg from "../../../src/images/profile.jpg"

const fade = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const popup = keyframes`
from {
  transform: scale(0.8);
}
to {
  transform: scale(1);
}
`;

const HeroContainer = styled.div`
background-color:#2C3E50;
display:flex;
justify-content:center;
position: relative;
padding: 80px 30px;
-webkit-animation: fade 5s forwards; 
-moz-animation: fade 5s forwards; 
animation: fade 5s forwards; 
@media screen and (max-width: 960px){
  padding: 66px 16px;
}
@media screen and (max-width: 640px){
  padding: 32px 16px;
}

z-index-1;
clip-path: polygon(0 0,100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%), translateY(-50%);
  transform: translateX(-50%), translateY(-50%);
  @media screen and (max-width: 960px) {
    padding: 0px 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 80px;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title =styled.div`
  animation: ${fade} 2s;
  font-size: 50px;
  font-weight:700;
  color:${({theme})=> theme.textPrimary};
  line-height:68px;
  @media screen and (max-width: 960px) {
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    font-size:40px;
    line-height:48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  animation: ${fade} 5s;
  font-size:32px;
  font-weight:600;
  color:${({theme})=> theme.textPrimary};
  line-height:68px;
  gap:12px;
  display:flex;
  @media screen and (max-width: 960px) {
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    font-size:30px;
    line-height:48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color:#FFD700;
  cursor: pointer;
`;

const SubTitle =styled.span`
animation: ${fade} 7s;
font-size:20px;
color:${({theme})=> theme.textPrimary + 95};
line-height:32px;
margin-bottom:42px;
@media screen and (max-width: 960px) {
  align-items: center;
}
@media screen and (max-width: 640px) {
  font-size:16px;
  margin-bottom: 24px;
}
`;

const Image = styled.img`
  animation: ${popup} 1s;
  width:100%;
  height:100%;
  position:relative;
  border-radius:50%;
  max-width:400px;
  max-height:400px;
  object-fit:cover;
  object-position:center;
  border: 5px solid ${({theme}) => theme.white};
  @media(max-width: 768px){
    max-width: 400px;
    max-height: 400px;
  }
  $media screen and (max-width: 640px){
    max-width: 280px;
    max-height: 280px;
  }
  `;


const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroInnerContainer>
        <HeroLeftContainer>
          <Image src={HeroImg}/></HeroLeftContainer>
          <HeroRightContainer>
            <Title>
              Hello Everyone, <br /> This is  {intro.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: intro.roles,
                    autoStart: true,
                    loop: true,
                  }}
                ></Typewriter>
              </Span>
            </TextLoop>
            <SubTitle>{intro.description}</SubTitle><br/>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
