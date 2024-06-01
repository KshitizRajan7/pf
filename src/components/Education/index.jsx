import React from "react";
import styled from "styled-components";
// import { experiences } from "../../data/informations";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Timeline from "@mui/lab/TimeLine";
import TimelineItem from "@mui/lab/TimeLineItem";
import { education } from "../../data/informations";
import EducationCard from "../Cards/EducationCard";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 100px;

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

const TimeLineSection = styled.div`
  width: 100%
  max-width : 100px;
  margin-top: 10px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap:12px;
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>Here are some of my Education.</Desc>
        <TimeLineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" sx={{ borderColor: 'white' }} />
                  {index !== education.length -1 && (
                    <TimelineConnector style={{ background: "white" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <EducationCard education={edu} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
