import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link, ScrollLink} from 'react-scroll'
import github from '../../assets/Github.png'
// import {} from 'react-icons';s

 const Nav = styled.div`
background-color: #37474F;
height: 80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
-webkit-animation: fade 3s forwards; 
-moz-animation: fade 3s forwards; 
animation: fade 3s forwards; 
@media screen and (max-width:960px){
  transition: 0.8s all ease;
}
`;

const NavContainer =styled.div`
display:flex;
justify-content:center;
height:60px;
z-index:1;
width:100%;
padding: 0 24px;
max-width:1200px;
`;

const NavLogo = styled(LinkR)`
color: ${({theme})=> theme.white};
width: 80%;
padding: 0 6px;
display:flex;
justify-self:flex-start;
cursor:pointer;
text-decoration: none;
align-items:center;
@media screen and (max-width: 640px){
  padding: 0 0px;
}
`;

const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 640px){
  display:block;
  position : absolute;
  top: 0 ;
  right: 0 ;
  transform: translate(-100%, 50%);
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({theme}) => theme.textPrimary};
`;

const NavItems = styled.ul`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:32px;
list-style:none;
@media screen and (max-width: 768px){
  display: none;
}
`;

const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:end;
  width: 80%;
  height:100%;
  padding: 0 6px;

  gap: 20px;
  @media screen and (max-width: 640px){
    display: none;
  }
`;

const ResumeButton = styled.button`
background-color: transparent ;
color:${({theme})=> theme.white};
border: 1.8px solid ${({theme})=> theme.white};
border-radius:50px;
display:flex;
justify-content:center;
align-items:center;
padding: 0px 25px;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
height: 70%;
&:hover{
  transform: scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow: 20px 20px 60px #1F2634,
};

@media screen and (max-width: 640px) {
  font-size: 0.8rem;
}
`;

const NavLink = styled(Link)`
  color: ${({theme})=> theme.textPrimary+90};
  font-weight: 500;
  cursor:pointer;
  text-decoration: none;
  transistion: all 1s ease-in-out;
  &:hover {
    color: ${({theme})=> theme.textPrimary};
    transform : translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:16px;
  position:absolute;
  top:80;
  right: 0;
  width : 100%
  padding: 12px 40px 24px 40px;
  background: ${({theme})=> theme.cardLight};
  transition: all 0.3s ease-in-out;
  transform : ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  opacity:${({open})=> open ? '1' : '0'}; 
  z-index:${({open})=> open ? '1' : '-1'}; 
`;

const MobileMenuLinks =styled(Link)`
  color: ${({theme}) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  text-decoration:none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color:${({theme})=> theme.primary};
  }
`;


const LinkIcon = styled.a`
  &:hover{
    transform: scale(1.05);
  transition: all 0.4s ease-in-out;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
`;

const Logo = styled.img`
  object-fit: cover;
height: 3rem;
width: 3rem;
@media (max-width:760px){
    margin: 0;
    height:2rem;
    width:2rem;
}
`;

const Navbar = () => {

    const [Open, setOpen] =React.useState(false);
    const theme = useTheme();
  return  <Nav>
    <NavContainer>
      <NavLogo to='/'>
      <a style ={{ 
        display:'flex',
        alignItems:'center',
        color:'white',
        marginBottom:'20',
        cursor:'pointer'
      }}/> <Span>Portfolio</Span>
      </NavLogo>
      <MobileIcon>
        <div
          onClick={()=>{
            setOpen(!open);
          }}
        />
      </MobileIcon>
      <NavItems>
      <NavLink activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500}>About</NavLink>
      <NavLink activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} >Skills</NavLink>
      <NavLink activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} >Projects</NavLink>
      <NavLink activeClass='active' to='education' spy={true} smooth={true} offset={-80} duration={500} >Education</NavLink>
      <NavLink activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} >Contact</NavLink>
      </NavItems>
      <ButtonContainer>
      <LinkIcon href='https://github.com/KshitizRajan7' target='_blank' rel="noreferrer"> <Logo src={github} alt='Github' /></LinkIcon>
      <ResumeButton>Resume</ResumeButton>
      </ButtonContainer>
    </NavContainer>
    {
      open &&(
        <MobileMenu open={Open}>
        <MobileMenuLinks  activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500}  onClick={()=>{setOpen(!Open);}}>About</MobileMenuLinks>
        <MobileMenuLinks  activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500}  onClick={()=>{setOpen(!Open);}}>Skills</MobileMenuLinks>
        <MobileMenuLinks  activeClass='active' to='experience' spy={true} smooth={true} offset={-80} duration={500}  onClick={()=>{setOpen(!Open);}}>Experience</MobileMenuLinks>
        <MobileMenuLinks  activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} onClick={()=>{setOpen(!Open);}}>Projects</MobileMenuLinks>
        <MobileMenuLinks  activeClass='active' to='education' spy={true} smooth={true} offset={-80} duration={500} onClick={()=>{setOpen(!Open);}}>Education</MobileMenuLinks>
        <MobileMenuLinks  activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} onClick={()=>{setOpen(!Open);}}>Contact</MobileMenuLinks>
        <LinkIcon href='https://github.com/KshitizRajan7' target='_blank'><Logo src={github}></Logo></LinkIcon>
        <ResumeButton>Resume</ResumeButton>
        </MobileMenu>
      )
    }
  </Nav>
}

export default Navbar
