import React from 'react';
import PropTypes from 'prop-types';
import FoodListPage from '../../feartures/Foodfeature/pages/FoodListPage';
import DetailBanner from '../../components/DetailBanner';
import { useSelector } from 'react-redux';
import CartFeature from '../../feartures/CartFeature';

OrderPage.propTypes = {
    
};

function OrderPage(props) {
     const openCart = useSelector((state) => state.food.openCart);
    return (
        <div>
            {openCart && <CartFeature />}
            <DetailBanner />
            <FoodListPage />
        </div>
    );
}

export default OrderPage;