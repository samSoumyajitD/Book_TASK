import React, { Component } from 'react';
import  Banner from '../components/Banner';
import BestBook from '../components/FavoriteBook';
import FavBook from '../components/FavBook';
import  Footer  from '../components/Footer';
const Home = () => {
    
        return (
            <div className=''>
       <Banner/>
    
       <BestBook/>
       <FavBook/>
       <Footer/>
            </div>
        );
    
}

export default Home;