//React
import React from 'react';
import { useSelector } from 'react-redux'; 

import BannerSilde from '../../components/BannerSilde';
import ButtonToTop from '../../components/Button';
import CartFeature from '../../feartures/CartFeature';
import FoodListPage from '../../feartures/Foodfeature/pages/FoodListPage';
import CategorySlice from './Components/CategorySlide';
import Works from './Components/Works';

function Home(props) {
    const openCart = useSelector(state => state.food.openCart)
    return (
        <div>
            {openCart && <CartFeature/>}
            <BannerSilde />
            <ButtonToTop />
            <Works />
            <CategorySlice />
            <FoodListPage />
            
        </div>
    );
}

export default Home;