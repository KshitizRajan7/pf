import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin: 10px;
  padding: 10px;
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

const ContactContainer = styled.form`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 60rem;
`;

const Input = styled.input`
  font-weight: 10;
  font-size: medium;
  width: 50%;
  max-width: 40rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: rgb(0,0,0, 0.2);
`;

const TextArea = styled.textarea`
font-weight: 10;
font-size: medium;
width: 50%;
max-width: 40rem;
margin: 0.5rem;
padding: 0.5rem 1rem;
border: none;
border-radius: 0.5rem;
background: rgb(0,0,0, 0.2);
`;


const SubmitButton = styled.button`
-webkit=appearance: button;
-moz-appearance:button;
appearance:button;
text-decoration:none;
width:200px;
max-width:300px;
text-align:center;
padding: 15px 0;
color: ${({theme})=> theme.white};
border-radius:15px;
cursor:pointer;
font-size:22px;
font-weight:400;
margin-top: 20px;
transition:all 0.2s ease-in-out !important;
background: #1e8449;
backgrount:linear-gradient(225deg,hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1)100%);
backgrount:-moz-linear-gradient(225deg,hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1)100%);
backgrount:-webkit-linear-gradient(225deg,hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1)100%);
box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
&:hover{
  transform: scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow: 20px 20px 60px #1F2634, filter:brightness(1); 
}

@media (max-width:760px){
    width:55%;
    font-size:15px;
font-weight:500;
}

`;






const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_gn2xsbl', 'template_zz0bmyn', form.current, '4JHG2okNFWM0XsbJq')
      .then((result)=>{
        console.log(result.text);
        alert('Email sent')
        e.target.reset();
      }, (error) =>{
        console.log(error.text);
      });
    };
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Here you can send your feedbacks and connect with me.</Desc>
        <ContactContainer ref={form} onSubmit={sendEmail}>
          <Input type="text" placeholder="Name" name="from_name"/>
          <Input type="email" placeholder="Email" name="from_email"/>
          <TextArea placeholder="Your Message" name="message" rows='5'/>
          <SubmitButton type="submit"> Submit </SubmitButton> 
        </ContactContainer>
      </Wrapper>
      
    </Container>
  );
};

export default Contact;
