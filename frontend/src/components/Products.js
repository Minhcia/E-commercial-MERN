import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ProductItems from './ProductItems'
import { popularProducts } from '../data'
import { useLocation } from 'react-router-dom'
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-decoration: none ;
`



const Products = ({cat, filter}) => {
    const location = useLocation()
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await axios.get(cat ? `http://localhost:5000/api/products/${cat}`
                :'http://localhost:5000/api/products');
                setProducts(res.data)     
            
            } catch (err){}
        };
        getProduct();
    }, [cat]);

   const productList = products.map((product, index)=>
       <ProductItems product={product} key={index}/>
   )


  return (
    <div>
        <Container>
            {productList}
        </Container>


    </div>
  )
}

export default Products