import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';



const Container = styled.div`
`
const Title = styled.h1``
const FilterContainer = styled.div`
    display: flex;
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


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const handleFilter = (e) => {
        const value = e.target.value
        setFilter({
            ...filter, 
            [e.target.name] : value
        })
    }
    // console.log(filter)
  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Title>Headline</Title>
    <FilterContainer>
        <Filter>
            <FilterText> Filter 1</FilterText>
            <Select name='color' onChange={handleFilter} >
                <Option disabled  >Option</Option>
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText> Filter 2</FilterText>
            <Select name='size' onChange={handleFilter}  >
            <Option  >Size</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>S</Option>
            </Select>
        </Filter>

    </FilterContainer>

<Products/>
<Newsletter/>
<Footer/>
    
</Container>

  )
}

export default ProductList