import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Mainslide from '../components/Mainslide';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Mainslide/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>    
    </div>
  )
}

export default Home