import React from 'react';
import PropTypes from 'prop-types';
import './FoodEmty.scss'
import emtyImg from '../../../assets/svg/Category/empty-shop.svg'
FoodEmty.propTypes = {
    
};

function FoodEmty({width, fz, content}) {
    return (
        <div className="food-emty__wrapper">
            <img src={emtyImg} width={width} alt="" />
            <h3 style={{ fontSize: `${fz}` }}>{content }</h3>
        </div>
    );
}

export default FoodEmty;