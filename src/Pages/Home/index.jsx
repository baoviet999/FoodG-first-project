//React
import React from 'react';
import { useSelector } from 'react-redux';
import BannerSilde from '../../components/BannerSilde';
import ButtonToTop from '../../components/Button';
import Footer from '../../components/Footer';
import Test from '../../components/Test/Test';
import CartFeature from '../../feartures/CartFeature';
import FavoriteFeature from '../../feartures/FavoriteFeature';
import FoodListPage from '../../feartures/Foodfeature/pages/FoodListPage';
import Analysis from './Components/Analysis';
import CategorySlice from './Components/CategorySlide';
import MenuPreview from './Components/MenuPreview';
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
            <MenuPreview />
            <Analysis/>
            <UserPreview />
            <FoodListPage />
            <Footer />
        </div>
    );
}

export default Home;