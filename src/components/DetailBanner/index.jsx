import React from 'react';
import PropTypes from 'prop-types';
import banner from '../../assets/img/Home/banner.jpg'
import './styles.scss'
import { useSelector } from 'react-redux';
import LinearScaleIcon from "@material-ui/icons/LinearScale";
DetailBanner.propTypes = {
    
};

function DetailBanner(props) {
    const type = useSelector(state => state.food.type)
    const newType = type.replace("/", "").replace("-", " ")
    return (
        <div className="detail__banner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="detail__banner-title">
                <h1>{newType}</h1>
            </div>
            <div className="detail__banner-linear">
                <span>Home</span>
                <LinearScaleIcon />
                <span>Food</span>
                <LinearScaleIcon />
                <span>{newType}</span>
            </div>
        </div>
    );
}

export default DetailBanner;