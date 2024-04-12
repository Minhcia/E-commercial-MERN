import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    background: black;
    color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
`


const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;

`
const Image = styled.img`
    width: 100%; 
    height: 800px;
`;


const ImageContent = styled.div `
    top: 450px;
    right:700px;
    display: flex;
    flex: 1;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: absolute;
`

const Title = styled.h3`
    display: flex;
    position: absolute;
    line-height: normal;
    height: auto;
    margin-top: -20%;
    margin-left: 3.3%;
    color: rgba(255,255,255,1);
    font-size: 4em;
`

const Info = styled.p`
    display: flex;
    position: absolute;
    top: 50px;
    line-height: normal;
    height: auto;
    color: rgba(255,255,255,1);
    font-size: 2em;
`

const Button =styled.button`
    color: whitesmoke;
    display: flex;
    font-size: 20px;
    width: 130px;
    height: 60px;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    align-items: center;
    align-content: center;
    justify-content: center;
    top: 200px;
`





const Mainslide = () => {
  return (
    <div>
        <Container>
             <ImageContainer>
                <Image src='https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </ImageContainer>
            <ImageContent>
                <Title>Welcome</Title>
                <Info></Info>
                <Link to={`/products/all`} >
                    <Button>Shop now</Button>
                </Link>
            </ImageContent>
        </Container>

    </div>
  )
}

export default Mainslide