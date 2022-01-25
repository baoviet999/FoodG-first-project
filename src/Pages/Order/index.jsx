import React from 'react';
import PropTypes from 'prop-types';
import FoodListPage from '../../feartures/Foodfeature/pages/FoodListPage';
import DetailBanner from '../../components/DetailBanner';
import { useSelector } from 'react-redux';
import CartFeature from '../../feartures/CartFeature';
import Footer from '../../components/Footer';
import FavoriteFeature from '../../feartures/FavoriteFeature';

OrderPage.propTypes = {
    
};

function OrderPage(props) {
     const openCart = useSelector((state) => state.food.openCart);
    const openFavorite = useSelector((state) => state.food.openFavorite);
    return (
        <div>
            {openFavorite && <FavoriteFeature />}
            {openCart && <CartFeature />}
            <DetailBanner />
            <FoodListPage />
            <Footer/>
        </div>
    );
}

export default OrderPage;