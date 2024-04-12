import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CategoryItems from './CategoryItems';
import { categories } from "../data";



const Container = styled.div`
    display: flex;
    background: black;
    color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
`




const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories