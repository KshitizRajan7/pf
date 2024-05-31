import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/informations";
const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132,59,206,0.06)5.71%,
    rgba(132,59,206,0)64.83%;
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0,100% 0, 100% 100%, 70% 100%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0; 
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 760px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size:18px;
  max-width:600px;
  text-align:center;
  color ${({ theme }) => theme.textPrimary};

@media (max-width:768px){
  font-size:16px;
}
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.white +80};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) =>
    active &&
    ` background-color: ${theme.black + 50};
    `}
  &:hover {
    background-color: ${({ theme }) => theme.black + 20};
  }

  @media (max-width: 768px) {
    padding: 6pox 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.white +80};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex-wrap: wrap;
  gap: 28px;
`;
const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects.</Desc>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton value="all" active onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton active onClick={() => setToggle("web app")}>
              Web App
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("web app")}>
              Web App
            </ToggleButton>
          )}

          <Divider />
          {toggle === "youtube documentry" ? (
            <ToggleButton
              active
              onClick={() => setToggle("youtube documentry")}
            >
              Youtube Documentries
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("youtube documentry")}>
              Youtube Documentries
            </ToggleButton>
          )}
        </ToggleGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item)=>item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
