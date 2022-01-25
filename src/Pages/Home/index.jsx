//React
import React from 'react';
import { useSelector } from 'react-redux'; 

import BannerSilde from '../../components/BannerSilde';
import ButtonToTop from '../../components/Button';
import Footer from '../../components/Footer';
import CartFeature from '../../feartures/CartFeature';
import FavoriteFeature from '../../feartures/FavoriteFeature';
import FoodListPage from '../../feartures/Foodfeature/pages/FoodListPage';
import CategorySlice from './Components/CategorySlide';
import UserPreview from './Components/UserPreview';
import Works from './Components/Works';

function Home(props) {
    const openCart = useSelector(state => state.food.openCart)
    const openFavorite = useSelector((state) => state.food.openFavorite);
    return (
        <div>
            {openFavorite && <FavoriteFeature />}
            {openCart && <CartFeature />}
            <BannerSilde />
            <ButtonToTop />
            <Works />
            <CategorySlice />
            <FoodListPage />
            <UserPreview />
            <Footer/>
        </div>
    );
}

export default Home;