import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
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
      <ReactPlayer
        controls={true} 
        url="https://youtu.be/R6ZK2AYnvdk?si=bijoRQocXEW483I2"
      />
    </Container>
  );
};

export default LatestVideo;
