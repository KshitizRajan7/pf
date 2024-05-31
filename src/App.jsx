import React from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { darkMode } from './themes/themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LatestVideo from './components/LatestVideo';

const Body = styled.div`
background-color:${({theme}) => theme.bg};
width: 100%;
height: 100%;
color:white;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(
  38.73deg,
  rgba(0,0,0,0.5) 0%,
  rgba(0,0,0,0) 50%
),
linear-gradient(
  141.27deg,
  rgba(0,0,0,0) 50%,
  rgba(0,0,0,0.5) 100%
);
width: 100%;
clip-path:polygon(0 0,100% 0,100% 100%,30% 99%,0 100%);
`;

const App = () => {
  return (
    <ThemeProvider theme={darkMode}>
    <Router>
    <Navbar/>
    <Body>
    <Hero/>
    <Wrapper>
    <LatestVideo/>
    <Skills/>
    </Wrapper>
    <Wrapper>
    <Projects/>
    <Education/>
    </Wrapper>
    <Contact/>
    <Footer/>
    </Body>
    </Router>
    </ThemeProvider>
  )
}

export default App
