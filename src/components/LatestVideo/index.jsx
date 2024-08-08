import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width:100%;
`;

const ReactPlayerComponent = styled.div`
display: flex;
justify-content:center;
z-index-1;
width:100%;
@media (max-width:760px){
  padding: 5%;
  width:100%;
}
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 760px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const LatestVideo = () => {
  return (
    <Container id="latestVideo">
      <Title>Latest Video</Title>
      <ReactPlayerComponent>
      <ReactPlayer
        controls={true} 
        url="https://youtu.be/yjbL2Cjg3XI?si=RVnira63G-tcBKox"
      />
      </ReactPlayerComponent>
    </Container>
  );
};

export default LatestVideo;
