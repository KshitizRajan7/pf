import React from 'react'
import styled, { keyframes } from 'styled-components'
import {skills} from"../../data/informations"

const fade = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Container =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
width: 100%;`;

const Wrapper =styled.div`
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
  font-size:42px;
  font-weight:600;
  text-align:center;
  margin-top:20px;
  color: ${({theme})=> theme.textPrimary};
  
  @media (max-width: 760px){
    margin-top:12px;
    font-size:32px;
  }
`;

const Desc = styled.div`
  font-size:18px;
  max-width:600px;
  text-align:center;
  color ${({theme})=> theme.textPrimary};

@media (max-width:768px){
  font-size:16px;
}
`;

const SkillsContainer =styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
  margin-top:30px;
  margin-bottom:30px;
  justify-content:center;
  gap: 10px;
`;

const Skill = styled.div`
 width:350px;
 height:350px;
 overflow:auto;
 background-color: rgba(0, 0, 0, 0.1);
 border: 0.1px solid ${({theme})=>theme.textPrimary + 80};;
 border-radius: 16px;
 padding: 18px 36px;

 @media (max-width:760px){
  width:150px;
 height:150px;
 }
 
 @media (max-width:500px){
  max-width:330px;
  padding: 10px 36px;
 }
`;

const SkillTitle = styled.h2`
 font-size:28px;
 font-weight: 600;
 color:  ${({theme})=>theme.textSecondary};
 margin-bottom: 20px;
 text-align: center;
 @media (max-width: 760px){
  font-size:15px;
 font-weight: 400;
 }
`;

const SkillList = styled.div`
 display:flex;
 justify-content: center;
 flex-wrap: wrap;
 gap:15px;
 margin-bottom: 20px;
`;

const SkillItem=styled.div`
 display:flex;
 align-items: center;
 gap: 5px;
 justify-content: center;
 font-size:16px;
 color:  ${({theme})=>theme.textPrimary + 80};
 border-radius: 12px;
 border: 1px solid ${({theme})=>theme.textPrimary + 80};
 padding : 12px 16px;
Font-weight: 400; 

@media (max-width:760px){
  gap:2px;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 8px;
 }
`;

const SkillImage = styled.img`
 width: 24px;
 height: 24px;

 @media (max-width:760px){
  width: 14px;
  height: 14px;
  
 }
`;

const Skills = () => {
  return (
    <Container id='skills'>
    <Wrapper>
    <Title>Skills</Title>
    <Desc>
    Here are some of my skills.
    </Desc>
    <SkillsContainer>
    {skills.map((item)=>(
      <Skill>
      <SkillTitle>{item.title}</SkillTitle>
      <SkillList>
      {item.skills.map((skill) =>(
        <SkillItem>
        <SkillImage src={skill.image} /> 
        {skill.name}
        </SkillItem>
      ))}
      </SkillList>
      </Skill>
    ))}
    </SkillsContainer>
    </Wrapper>
    </Container>
  )
}
export default Skills
