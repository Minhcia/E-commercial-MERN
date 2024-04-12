import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {publicRequest} from "../requestMethod";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const Container = styled.div`
`

const Wrapped = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
`

const ImageContainer = styled.div`
    flex: 1 ;
    object-fit: cover;
`
const Image = styled.img`
    width: 689px;
    height: 770px;

`

const InfoContainer = styled.div`
    padding-left: 50px;
    flex: 1;
    
`
const Title = styled.h1`
    font-weight: 600;
`
const Price = styled.h3``
const Desc = styled.span`
    width: 100%;
`


const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin: 20px;

`


const Select = styled.select`
    padding: 20px;
    margin-right: 20px;
    font-size: 20px;
`
const Option = styled.option`

`



const AddContainer = styled.div`
   width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 `
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: black;
`



const Button = styled.button`
    padding: 15px;
    border: 1px solid;
    background-color: grey;
    cursor: pointer;
    font-weight: 600;
`




const Singleproduct = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    // console.log(id)
    // console.log(location)
    useEffect(()=>{    
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get("/products/find/"+ id)
                setProduct(res.data)
                // console.log(res)
            }catch(err){}
        }
        getProduct()
    },[id]);

    const handleQuantity = (type)=>{
        if (type === "inc") {
            setQuantity(quantity+1)
        } else {
            quantity > 0 && setQuantity(quantity -1)
        }
    }

    const handleClick = ()=> {
        dispatch(
            addProduct({product, quantity, price: product.price*quantity})
        )
        console.log(product.price)
    }
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapped> 
            <ImageContainer>
                <Image src= {product.image}/>
            </ImageContainer >
            <InfoContainer>
                <Title >{product.title}</Title>
                <Price>{product.price} $</Price>
                <Desc>{product.description} </Desc>    
                <FilterContainer>
                    <Filter>
                        <FilterText> Color</FilterText>
                        <Select>
                            <Option disabled selected>Option</Option>
                            <Option>Option 1</Option>
                            <Option>Option 2</Option>
                            <Option>Option 3</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText> Size</FilterText>
                        <Select>
                        <Option disabled selected>Option</Option>
                            <Option>XXL</Option>
                            <Option>XL</Option>
                            <Option>L</Option>
                            <Option>M</Option>
                            <Option>S</Option>
                        </Select>
                    </Filter>

                </FilterContainer> 
         <AddContainer>
            <AmountContainer>
              <Add onClick = {()=> handleQuantity("inc")}/>
              <Amount>{quantity}</Amount>
              <Remove  onClick = {()=> handleQuantity("dec")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
        </AddContainer>        
            </InfoContainer>
        </Wrapped>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Singleproduct