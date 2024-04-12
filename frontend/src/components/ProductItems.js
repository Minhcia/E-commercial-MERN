import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex: 1;
    min-width: 280px;
    height: 350px;
    align-items: center;
    background-color: black;
    
`

const Button = styled.button`
    height: 30px;
    width: 90px;
    position: relative;
    top: 150px;
    right: 145px;
    flex: 1;
    border: none;
    background-color: gray;
    color: white;
    cursor: pointer;

`

const Image = styled.img`
    
    width: 350px;
   height: 350px;
`




const ProductItems = ({product}) => {
  return (
    <div>
        <Container>
            <Link to={`/product/${product._id}`}>
                <Image src={product.image}/>
            </Link>
                <Button>Add to cart</Button>
            
        </Container>

    </div>
  )
}

export default ProductItems