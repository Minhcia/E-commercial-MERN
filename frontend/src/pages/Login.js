import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCall';
import { useNavigate} from 'react-router-dom';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
`
const Wrapped = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    padding: 50px;
    justify-content: space-between;
    gap: 10px;
`

const Title = styled.h1`
    font-size: 3em;
    font-weight: 800;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 500px;
    
`
const Input = styled.input`
    font-size: 1.5em;
    padding: 5px 30px;
    margin: 5px 0px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;

`


const Button = styled.button`
    padding: 15px;
    background-color: lightseagreen;
    color: white;
    cursor: pointer;
    font-weight: 600;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isFetching, error} = useSelector((state)=> state.user)
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username,password});
    }
  return (
    <Container>
        <Wrapped>
            <Title>LOG IN</Title>
            <Form>
                <Input onChange={(e)=> setUsername(e.target.value) } 
                        placeholder="Username">

                </Input>
                <Input 
                onChange={(e)=> setPassword(e.target.value) } 
                placeholder="Password"
                type="password">
                </Input>   
            </Form>
            <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
            <Link>Forgot your Password</Link>   
            <Link>Create an account</Link>
        </Wrapped>
    </Container>
  )
}

export default Login