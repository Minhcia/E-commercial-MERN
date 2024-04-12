import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    height: 30vh;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
`;

const SocialContainer = styled.div`
  display: flex;
`;




const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;





const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>My Shop</Logo>
        <Desc>
          Helo
        </Desc>
        <SocialContainer>
          
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <Link to={`/`} style={{ textDecoration: 'none', color:'black'}} >
          <ListItem> Home</ListItem>
        </Link>
        <Link to={`/cart`} style={{ textDecoration: 'none', color:'black'}} >
          <ListItem>Cart</ListItem>
        </Link>
        <Link to={`/profile`} style={{ textDecoration: 'none', color:'black'}} >
        <ListItem>My Account</ListItem>
        </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        344 Clinton Street, Apartment 3D, Metropolis City 
        </ContactItem>
        <ContactItem>
          +5 555 555 55
        </ContactItem>
        <ContactItem>
          clark.kent.not.sup@shop.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer