import React from 'react'
import styled from 'styled-components'

const Card =styled.a`
    widht: 330px;
    height:490px;
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: center;
    text-decoration:none;

    &:hover {
        transform : translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(255, 255, 255, 0.2);
        filter: brightness(1.1);
    }
`;

const ImageContainer = styled.div`
    background: transparent;
    display:flex;
    justify-content:center;
    align-item:center;
`;

const Image= styled.img`
    width: 300px;
    heigth:300px;
    object-fit: cover;
`;

const Details= styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Tags = styled.div`
    widht:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap: 8px;
    margin-top:4px;
    align-item:center;
`;

const Tag = styled.span`
    font-size:12px;
    font-weight: 400;
    color: ${({theme})=> theme.white};
    background-color: ${({theme})=> theme.black+50};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size:20px;
    font-weight: 600;
    color: ${({theme})=> theme.textSecondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width:100%;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size:12px;
    font-weight: 400;
    margin-left: 2px;
    color: ${({theme})=> theme.textSecondary+80};

    @media (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme})=> theme.textSecondary +99};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width:100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
`;

const Member =styled.div`
    display:flex;
    align-items:center;
    padding-left:10px;
`;

const Avatar =styled.img`
    width:38px;
    height:38px;
    border-radius:50%;
    margin-left: -10px;
    background-color: ${({theme})=> theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme})=> theme.card};
`;

const ProjectCard = ({project}) => {
  return (
    <Card href={project.github} target="_blank">
    <ImageContainer>
    <Image src={project.img}/>
    </ImageContainer>
    <Tags>
        {project.tags.map((tag)=>(
            <Tag key={tag}>{tag}</Tag>
        ))}
    </Tags>
    <Details>
    <Title>{project.title}</Title>
    <Date>{project.date}</Date>
    <Description>{project.description}</Description></Details>
    <Member>
    {project.member?.map((member)=>(
       <Avatar src={member.img}/> 
    ))}
        </Member>
    </Card>
  )
}

export default ProjectCard
