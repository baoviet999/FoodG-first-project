import React from 'react';
import PropTypes from 'prop-types';
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import './StarFilter.scss'
StarFilter.propTypes = {
    
};

function StarFilter({ onStarClick }) {
    const handleStarClick = (value) => {
        if (!onStarClick) return
        onStarClick(value)
    }
    return (
        <div className="star-filter__wrapper">
            <div className="star-filter__star" onClick={()=> handleStarClick(5)} >
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
            </div>
            <div className="star-filter__star" onClick={()=> handleStarClick(4)}>
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarOutlineRoundedIcon />
            </div>
            <div className="star-filter__star" onClick={()=> handleStarClick(3)}>
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarOutlineRoundedIcon />
                <StarOutlineRoundedIcon />
            </div>
        </div>
    );
}

export default StarFilter;