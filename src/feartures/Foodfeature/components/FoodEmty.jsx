import React from 'react';
import PropTypes from 'prop-types';
import './FoodEmty.scss'
import emtyImg from '../../../assets/svg/Category/empty-shop.svg'
FoodEmty.propTypes = {
    
};

function FoodEmty(props) {
    return (
        <div className="food-emty__wrapper">
            <img src={emtyImg} alt="" />
            <h3>No Product you're looking for!!!</h3>
        </div>
    );
}

export default FoodEmty;