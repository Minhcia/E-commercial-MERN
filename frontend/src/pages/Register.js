import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapped = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    padding: 50px;
    justify-content: space-between;`

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
    flex: 1;
    font-size: 2em;
    padding: 0px 30px;
    margin: 5px 0px;

`
const Agreement = styled.p`
    font-size: 1.3em;
    font-weight: 500;
    
`
const Button = styled.button`
    padding: 15px;
    background-color: lightseagreen;
    cursor: pointer;
    font-weight: 600;
`



const Register = () => {
  return (
    <Container>
        <Wrapped>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"></Input>
                <Input placeholder="Last name"></Input>
                <Input placeholder="Username"></Input>
                <Input placeholder="E-mail"></Input>
                <Input placeholder="Password"></Input>
                <Input placeholder="Confirm"></Input>
            </Form>
            <Agreement>
                I agree with website policy
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
        </Wrapped>
    </Container>
  )
}

export default Register