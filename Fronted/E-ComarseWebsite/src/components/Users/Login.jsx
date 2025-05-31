import React, { useState } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const slideIn = keyframes`
from {
  transform: translateY(20px);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
background: url('https://t3.ftcdn.net/jpg/07/81/00/14/240_F_781001443_XcznCcjr4qApwTST5EtQLp8pWiTudlTZ.jpg') no-repeat center center/cover;
animation: ${fadeIn} 1.5s ease-in-out;

h2 {
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  animation: ${slideIn} 1s ease-in-out;
}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 1rem;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
padding: 20px;
background-color: rgba(255, 255, 255, 0.9);
box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
border-radius: 10px;
animation: ${fadeIn} 2s ease-in-out;
background: url('https://c.saavncdn.com/739/Shree-Hari-Stotram-Sanskrit-2021-20220804142139-500x500.jpg') no-repeat center center/cover;
@media (max-width: 768px) {
  width: 80%;
  padding: 15px;
}

@media (max-width: 480px) {
  width: 95%;
  padding: 10px;
}
`;

const FormGroup = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
animation: ${slideIn} 1.5s ease-in-out;
`;

const InputLabel = styled.label`
margin-bottom: 5px;
font-size: 1rem;
color: #333;
`;

const Input = styled.input`
padding: 10px;
font-size: 1rem;
border: 1px solid #ddd;
border-radius: 5px;
transition: border-color 0.3s ease;

&:focus {
  border-color: #007bff;
  outline: none;
}
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://bharat-ecommarse-2.onrender.com/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      setFormData({
        email: '',
        password: ''
      });
  navigate('/');
    } catch (err) {
      alert('Error logging in user');
    }
  };
const navigateToSigup =()=>{
  navigate('/SignupPage');
}
  return (
    <Container>
      <h2>login ..</h2>
      <Form onSubmit={onSubmit}>

        <FormGroup>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />
        </FormGroup>
        <Button type="submit">Register</Button>
        <SecondaryButton type="button" onClick={navigateToSigup}>Go to signup</SecondaryButton>
      </Form>
    </Container>
  );
};

export default Login;
